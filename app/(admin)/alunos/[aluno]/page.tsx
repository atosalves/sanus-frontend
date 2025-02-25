import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { AlunoDetalhadoDTO } from "@/services/alunos-service";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { z } from "zod";

const localidade = "pt-BR";

const valorFormatoBRL = new Intl.NumberFormat(localidade, {
    style: "currency",
    currency: "BRL",
});

const dataFormatoBR = new Intl.DateTimeFormat(localidade, {
    day: "2-digit",
    month: "long",
    year: "numeric",
});

export default function AlunoPage() {
    const aluno = {
        usuario: {
            admin: false,
            ativo: true,
            nome: "João Silva",
            email: "joao.silva@example.com",
            telefone: "(11) 98765-4321",
            cpf: "123.456.789-00",
        },
        matricula: "20230001",
        nomeDoPlano: "Plano Premium",
        descricaoDoPlano: "Acesso ilimitado a todas as aulas e recursos.",
        diasDaSemanaDisponiveis: 5,
        valorDoPlano: 199.99,
        congelamentoDias: 30,
        dataAssinatura: "2023-01-01",
        dataVencimento: "2023-12-31",
        statusDoPlano: "ativo",
    };

    const { nome, email, telefone, cpf, admin, ativo } = aluno.usuario;
    return (
        <>
            <Link href="/alunos" className="flex space-x-4">
                <ArrowLeft />
                Voltar
            </Link>
            <div className="grid grid-cols-2 gap-4 h-full">
                <Card>
                    <CardHeader>
                        <CardTitle>Aluno</CardTitle>
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
                            <Label>{aluno.matricula}</Label>
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
                        <CardTitle>Plano</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div>
                            <CardDescription>Matrícula:</CardDescription>
                            <Label>{aluno.nomeDoPlano}</Label>
                        </div>
                        <div>
                            <CardDescription>Descrição:</CardDescription>
                            <Label>{aluno.descricaoDoPlano}</Label>
                        </div>
                        <div>
                            <CardDescription>Dias da semana disponíveis:</CardDescription>
                            <Label>{aluno.diasDaSemanaDisponiveis}</Label>
                        </div>
                        <div>
                            <CardDescription>Valor:</CardDescription>
                            <Label>{valorFormatoBRL.format(aluno.valorDoPlano)}</Label>
                        </div>
                        <div>
                            <CardDescription>Dias de congelamento:</CardDescription>
                            <Label>{aluno.congelamentoDias}</Label>
                        </div>
                        <div>
                            <CardDescription>Data de assinatura:</CardDescription>
                            <Label>{dataFormatoBR.format(new Date(aluno.dataAssinatura))}</Label>
                        </div>
                        <div>
                            <CardDescription>Data de vencimento:</CardDescription>
                            <Label>{dataFormatoBR.format(new Date(aluno.dataVencimento))}</Label>
                        </div>
                        <div>
                            <CardDescription>Status do plano:</CardDescription>
                            <Label>{aluno.statusDoPlano}</Label>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Link href="/">
                            <Button>Ver detalhes do plano</Button>
                        </Link>
                    </CardFooter>
                </Card>
            </div>
        </>
    );
}
