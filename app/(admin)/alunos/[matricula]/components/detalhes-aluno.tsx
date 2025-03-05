"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import AtualizaPlanoAlunoDialog from "./atualiza-plano-aluno-dialog";
import { Carregando } from "@/components/carregando";
import { useBuscaAluno } from "@/hooks/aluno/use-busca-aluno";

const dataFormatoBR = new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
});

export default function DetalhesAluno({ matricula }: { matricula: string }) {
    const { data, isLoading, error } = useBuscaAluno(matricula);

    if (isLoading) return <Carregando />;

    if (error) {
        return <div className="flex justify-center space-x-4 h-full w-full">{error.message}</div>;
    }

    if (!data) {
        return <div className="flex justify-center space-x-4 h-full w-full">Dados não encontrados</div>;
    }

    const { usuarioReponseDto, idPlano, planoNome, dataAssinatura, dataVencimento, statusPlano } = data;

    const { nome, email, telefone, cpf, admin, ativo } = usuarioReponseDto;

    return (
        <div className="flex flex-col h-full space-y-4">
            <Label className="text-red-500">Esta conta {!admin && "não"} possui permissões de administrador</Label>
            <div>
                <p>Nome:</p>
                <Label>{nome}</Label>
            </div>
            <div>
                <p>Email:</p>
                <Label>{email}</Label>
            </div>
            <div>
                <p>Telefone:</p>
                <Label>{telefone}</Label>
            </div>
            <div>
                <p>CPF:</p>
                <Label>{cpf}</Label>
            </div>
            <div>
                <p>Situação da conta:</p>
                <Label>{ativo ? "ATIVADO" : "DESATIVADO"}</Label>
            </div>
            <div>
                <p>Matrícula:</p>
                <Label>{matricula}</Label>
            </div>

            <div>
                <p>Plano:</p>
                <Label>{planoNome}</Label>
            </div>
            <div>
                <p>Data de assinatura:</p>
                <Label>{dataFormatoBR.format(new Date(dataAssinatura))}</Label>
            </div>
            <div>
                <p>Data de vencimento:</p>
                <Label>{dataFormatoBR.format(new Date(dataVencimento))}</Label>
            </div>
            <div>
                <p>Status do plano:</p>
                <Label>{statusPlano}</Label>
            </div>
            <Link href={`/planos/${idPlano}`}>
                <Button>Ver detalhes do plano</Button>
            </Link>
            <AtualizaPlanoAlunoDialog {...{ matricula, idPlano }} />
        </div>
    );
}
