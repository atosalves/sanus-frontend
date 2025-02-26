import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CriarAlunoDTO } from "@/services/aluno-schemas";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";

import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { Dispatch, SetStateAction, useState } from "react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import axios, { AxiosError } from "axios";
import { Terminal, CheckCircle } from "lucide-react";
import { toast } from "sonner";

interface FormularioAlunoProps {
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function FormularioCriarAluno({ setIsOpen }: FormularioAlunoProps) {
    const form = useForm<z.infer<typeof CriarAlunoDTO>>({
        resolver: zodResolver(CriarAlunoDTO),
        defaultValues: {
            usuario: {
                admin: false,
                nome: "",
                email: "",
                telefone: "",
                cpf: "",
            },
        },
    });

    const { isSubmitting } = form.formState;

    const [erro, setErro] = useState<AxiosError | null>(null);

    async function onSubmit(data: z.infer<typeof CriarAlunoDTO>) {
        await axios
            .post("http://localhost:8080/alunos", data)
            .then((resposta) => {
                if (resposta.status === 200) {
                    toast("Aluno criado com sucesso", { icon: <CheckCircle color="green" /> });
                    setIsOpen(false);
                }
            })
            .catch((erro: AxiosError) => {
                if (erro instanceof AxiosError) {
                    setErro(erro);
                }
            });
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                    control={form.control}
                    name="usuario.admin"
                    render={({ field }) => (
                        <FormItem className="flex flex-row items-center justify-between">
                            <FormLabel>É um usuário administrador?</FormLabel>
                            <FormControl>
                                <Switch checked={field.value} onCheckedChange={field.onChange} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="usuario.nome"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nome completo</FormLabel>
                            <FormControl>
                                <Input placeholder="Nome completo" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="usuario.email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input type="email" placeholder="Email" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="usuario.telefone"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Telefone</FormLabel>
                            <FormControl>
                                <InputOTP maxLength={11} {...field} pattern={REGEXP_ONLY_DIGITS}>
                                    <span className="font-bold">&#40;</span>
                                    <InputOTPGroup>
                                        <InputOTPSlot index={0} />
                                        <InputOTPSlot index={1} />
                                    </InputOTPGroup>
                                    <span className="font-bold">&#41;</span>
                                    <InputOTPGroup>
                                        <InputOTPSlot index={2} />
                                    </InputOTPGroup>
                                    <InputOTPGroup>
                                        <InputOTPSlot index={3} />
                                        <InputOTPSlot index={4} />
                                        <InputOTPSlot index={5} />
                                        <InputOTPSlot index={6} />
                                    </InputOTPGroup>
                                    <span className="font-bold">-</span>
                                    <InputOTPGroup>
                                        <InputOTPSlot index={7} />
                                        <InputOTPSlot index={8} />
                                        <InputOTPSlot index={9} />
                                        <InputOTPSlot index={10} />
                                    </InputOTPGroup>
                                </InputOTP>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="usuario.cpf"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>CPF</FormLabel>
                            <FormControl>
                                <InputOTP maxLength={11} {...field} pattern={REGEXP_ONLY_DIGITS}>
                                    <InputOTPGroup>
                                        <InputOTPSlot index={0} />
                                        <InputOTPSlot index={1} />
                                        <InputOTPSlot index={2} />
                                    </InputOTPGroup>
                                    <span className="font-bold">.</span>
                                    <InputOTPGroup>
                                        <InputOTPSlot index={3} />
                                        <InputOTPSlot index={4} />
                                        <InputOTPSlot index={5} />
                                    </InputOTPGroup>
                                    <span className="font-bold">.</span>
                                    <InputOTPGroup>
                                        <InputOTPSlot index={6} />
                                        <InputOTPSlot index={7} />
                                        <InputOTPSlot index={8} />
                                    </InputOTPGroup>

                                    <span className="font-bold">-</span>
                                    <InputOTPGroup>
                                        <InputOTPSlot index={9} />
                                        <InputOTPSlot index={10} />
                                    </InputOTPGroup>
                                </InputOTP>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="planoId"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Modelo</FormLabel>
                            <FormLabel>Plano</FormLabel>
                            <Select onValueChange={field.onChange}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Selecione um plano" {...field} />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="1">BÁSICO</SelectItem>
                                    <SelectItem value="2">MÉDIO</SelectItem>
                                    <SelectItem value="3">PREMIUM</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {erro && (
                    <Alert variant="destructive">
                        <Terminal className="h-4 w-4" />
                        <AlertTitle>Houve um problema</AlertTitle>
                        <AlertDescription>{erro.message}</AlertDescription>
                    </Alert>
                )}
                <Button type="submit" disabled={isSubmitting}>
                    Adicionar
                </Button>
            </form>
        </Form>
    );
}
