"use client";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { TrocarPlanoSchema } from "@/services/plano-aluno-schemas";
import { Terminal } from "lucide-react";

interface FormularioAtualizarPlanoAlunoProps {
    matricula: string;
    onSubmit: SubmitHandler<z.infer<typeof TrocarPlanoSchema>>;
    isPendente: boolean;
    erro: Error | null;
}

export default function FormularioAtualizarPlanoAluno({
    matricula,
    onSubmit,
    isPendente,
    erro,
}: FormularioAtualizarPlanoAlunoProps) {
    const form = useForm<z.infer<typeof TrocarPlanoSchema>>({
        resolver: zodResolver(TrocarPlanoSchema),
        defaultValues: {
            matricula: matricula,
        },
    });

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
                <Button type="submit" disabled={isPendente}>
                    Adicionar
                </Button>
            </form>
        </Form>
    );
}
