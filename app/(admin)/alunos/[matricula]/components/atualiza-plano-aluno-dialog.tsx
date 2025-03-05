"use client";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { Terminal } from "lucide-react";
import { ArrowDownUpIcon } from "lucide-react";

import { useAtualizaPlanoAluno } from "@/hooks/plano-aluno/use-atualiza-plano-aluno";

interface AtualizaPlanoAlunoDialogProps {
    matricula: string;
}

export default function AtualizaPlanoAlunoDialog({ matricula }: AtualizaPlanoAlunoDialogProps) {
    const { isOpen, setIsOpen, mutation, form } = useAtualizaPlanoAluno(matricula);

    const { mutate, isPending, error } = mutation;

    return (
        <Dialog onOpenChange={() => setIsOpen(!isOpen)} open={isOpen}>
            <DialogTrigger asChild>
                <Button>
                    <ArrowDownUpIcon />
                    Trocar plano
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Adicionar aluno</DialogTitle>
                    <DialogDescription>
                        Este é o formulário para adicionar um novo aluno. Preencha os campos abaixo e clique em
                        "Adiconar".
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit((planoFormData) => {
                            console.log(planoFormData);

                            mutate(planoFormData);
                        })}
                        className="space-y-6"
                    >
                        <FormField
                            control={form.control}
                            name="idPlanoNovo"
                            render={({ field }) => (
                                <FormItem>
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
                        {error && (
                            <Alert variant="destructive">
                                <Terminal className="h-4 w-4" />
                                <AlertTitle>Houve um problema</AlertTitle>
                                <AlertDescription>{error.message}</AlertDescription>
                            </Alert>
                        )}
                        <Button type="submit" disabled={isPending}>
                            Adicionar
                        </Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
