"use client";

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
import { CircleCheck, Terminal } from "lucide-react";
import { toast } from "sonner";
import { TrocarPlanoSchema } from "@/services/plano-aluno-schemas";

interface FormularioAlunoProps {
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    matricula: string;
}

export default function FormularioAtualizarPlanoAluno({ setIsOpen, matricula }: FormularioAlunoProps) {
    const form = useForm<z.infer<typeof TrocarPlanoSchema>>({
        resolver: zodResolver(TrocarPlanoSchema),
        defaultValues: {
            matricula: matricula,
        },
    });

    const { isSubmitting } = form.formState;

    const [erro, setErro] = useState<AxiosError | null>(null);

    async function onSubmit(data: z.infer<typeof TrocarPlanoSchema>) {
        await axios
            .put("http://localhost:8080/alunos/planos", data)
            .then((resposta) => {
                if (resposta.status === 200) {
                    setIsOpen(false);
                    toast("Aluno adicionado com sucesso", {
                        icon: <CircleCheck color="green" />,
                    });
                }
            })
            .catch((erro: AxiosError) => {
                const axiosError = erro as AxiosError;
                setErro(axiosError);
            });
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                    control={form.control}
                    name="idPlanoNovo"
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
