"use client";

import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AlertCircle } from "lucide-react";

import Link from "next/link";
import { useBuscarTodosAlunos } from "@/hooks/use-aluno";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function TabelaAlunos() {
    const { data, isLoading, isError } = useBuscarTodosAlunos();

    if (isLoading) return "Carregando";

    if (isError)
        return (
            <Alert variant="destructive">
                <AlertTitle>Algo deu errado!</AlertTitle>
                <AlertDescription>Erro ao buscar alunos</AlertDescription>
            </Alert>
        );

    if (data?.length === 0)
        return (
            <Alert>
                <AlertTitle>Nenhum aluno encontrado</AlertTitle>
                <AlertDescription>Clique no botão "Novo aluno" para adicionar um aluno!</AlertDescription>
            </Alert>
        );

    return (
        <>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="text-center w-32">Matrícula</TableHead>
                        <TableHead>Nome</TableHead>
                        <TableHead className="text-center">Telefone</TableHead>
                        <TableHead className="text-center">Plano</TableHead>
                        <TableHead className="text-center">Status do plano</TableHead>
                        <TableHead className="text-center">Ações</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data?.map(({ matricula, usuario, nomePlano, planoStatus }) => (
                        <TableRow key={matricula}>
                            <TableCell className="text-center font-medium">{matricula}</TableCell>
                            <TableCell>{usuario.nome}</TableCell>
                            <TableCell className="text-center">{usuario.telefone}</TableCell>
                            <TableCell className="text-center">{nomePlano}</TableCell>
                            <TableCell className="text-center">{planoStatus}</TableCell>
                            <TableCell className="text-center space-x-2">
                                <Link href={`alunos/${matricula}`}>
                                    <Button variant="ghost">
                                        <AlertCircle />
                                        Mais informações
                                    </Button>
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    );
}
