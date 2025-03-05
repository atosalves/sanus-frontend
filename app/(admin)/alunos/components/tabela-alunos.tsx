"use client";

import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AlertCircle } from "lucide-react";

import Link from "next/link";

import { Carregando } from "@/components/carregando";
import { Erro } from "@/components/erro";
import { CampoVazio } from "@/components/campo-vazio";
import { useBuscaTodosAlunos } from "@/hooks/aluno/use-busca-todos-alunos";

export default function TabelaAlunos() {
    const { data, isLoading, error } = useBuscaTodosAlunos();

    if (isLoading) return <Carregando />;

    if (error) return <Erro error={error} />;

    if (!data || data.length === 0)
        return (
            <CampoVazio>
                Nenhum aluno encontrado, clique no botão <span className="font-bold">Novo aluno</span> para adicionar um
                novo aluno!
            </CampoVazio>
        );

    return (
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
                {data.map(({ matricula, usuario, nomePlano, planoStatus }) => (
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
    );
}
