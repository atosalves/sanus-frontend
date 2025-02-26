import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { AlunoDetalhadoDTO } from "@/services/aluno-schemas";
import axios from "axios";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { z } from "zod";
import AtualizaPlanoAlunoDialog from "../components/atualizar-plano-aluno-dialog";

const dataFormatoBR = new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
});

export default async function AlunoPage({ params }: { params: Promise<{ matricula: string }> }) {
    const matricula = (await params).matricula;

    const {
        usuarioReponseDto,
        idPlano,
        planoNome,
        dataAssinatura,
        dataVencimento,
        statusPlano,
    }: z.infer<typeof AlunoDetalhadoDTO> = await axios
        .get(`http://localhost:8080/alunos/${matricula}`)
        .then((resposta) => {
            return resposta.data;
        });

    const { nome, email, telefone, cpf, admin, ativo } = usuarioReponseDto;

    return (
        <>
            <Link href="/alunos" className="flex space-x-2 items-center">
                <ArrowLeft />
                <span>Voltar</span>
            </Link>

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
