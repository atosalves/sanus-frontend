"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useBuscarAluno } from "@/hooks/use-aluno";
import AtualizaPlanoAlunoDialog from "../../components/atualizar-plano-aluno-dialog";

const dataFormatoBR = new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
});

export default function DetalhesAluno({ matricula }: { matricula: string }) {
    const { data, isLoading, error } = useBuscarAluno(matricula);

    if (isLoading) {
        return "Carregando...";
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!data) {
        return "Não encontrado";
    }

    const { usuarioReponseDto, idPlano, planoNome, dataAssinatura, dataVencimento, statusPlano } = data;

    const { nome, email, telefone, cpf, admin, ativo } = usuarioReponseDto;

    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle>Detalhes sobre a conta do aluno:</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <CardDescription>Nome:</CardDescription>
                        <Label>{nome}</Label>
                    </div>
                    <div>
                        <CardDescription>Email:</CardDescription>
                        <Label>{email}</Label>
                    </div>
                    <div>
                        <CardDescription>Telefone:</CardDescription>
                        <Label>{telefone}</Label>
                    </div>
                    <div>
                        <CardDescription>CPF:</CardDescription>
                        <Label>{cpf}</Label>
                    </div>
                    <div>
                        <CardDescription>Situação da conta:</CardDescription>
                        <Label>{ativo ? "ATIVADO" : "DESATIVADO"}</Label>
                    </div>
                    <div>
                        <CardDescription>Matrícula:</CardDescription>
                        <Label>{matricula}</Label>
                    </div>
                </CardContent>
                <CardFooter>
                    <Label className="text-red-500">
                        Esta conta {!admin && "não"} possui permissões de administrador
                    </Label>
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Detalhes sobre o plano</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                    <div>
                        <CardDescription>Plano:</CardDescription>
                        <Label>{planoNome}</Label>
                    </div>
                    <div>
                        <CardDescription>Data de assinatura:</CardDescription>
                        <Label>{dataFormatoBR.format(new Date(dataAssinatura))}</Label>
                    </div>
                    <div>
                        <CardDescription>Data de vencimento:</CardDescription>
                        <Label>{dataFormatoBR.format(new Date(dataVencimento))}</Label>
                    </div>
                    <div>
                        <CardDescription>Status do plano:</CardDescription>
                        <Label>{statusPlano}</Label>
                    </div>
                </CardContent>
                <CardFooter className="space-x-4">
                    <Link href={`/planos/${idPlano}`}>
                        <Button>Ver detalhes do plano</Button>
                    </Link>
                    <AtualizaPlanoAlunoDialog matricula={matricula} />
                </CardFooter>
            </Card>
        </>
    );
}
