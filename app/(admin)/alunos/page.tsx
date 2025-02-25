import CriarAlunoDialog from "./components/criar-aluno-dialog";
import TabelaAlunos from "./components/tabela-alunos";

import { Separator } from "@/components/ui/separator";

const data = [
    {
        matricula: "2021001",
        usuario: {
            nome: "João Silva",
            telefone: "123456789",
        },
        plano: {
            nome: "BÁSICO",
            status: "Ativo",
        },
    },
    {
        matricula: "2021002",
        usuario: {
            nome: "Maria Oliveira",
            telefone: "987654321",
        },
        plano: {
            nome: "BÁSICO",
            status: "Ativo",
        },
    },
    {
        matricula: "2021003",
        usuario: {
            nome: "Pedro Santos",
            telefone: "456123789",
        },
        plano: {
            nome: "PREMIUM",
            status: "Inativo",
        },
    },
    {
        matricula: "2021004",
        usuario: {
            nome: "Ana Costa",
            telefone: "789456123",
        },
        plano: {
            nome: "BÁSICO",
            status: "Ativo",
        },
    },
    {
        matricula: "2021005",
        usuario: {
            nome: "Lucas Pereira",
            telefone: "321654987",
        },
        plano: {
            nome: "PREMIUM",
            status: "Inativo",
        },
    },
    {
        matricula: "2021006",
        usuario: {
            nome: "João Silva",
            telefone: "123456789",
        },
        plano: {
            nome: "BÁSICO",
            status: "Ativo",
        },
    },
    {
        matricula: "2021007",
        usuario: {
            nome: "Maria Oliveira",
            telefone: "987654321",
        },
        plano: {
            nome: "BÁSICO",
            status: "Ativo",
        },
    },
    {
        matricula: "2021008",
        usuario: {
            nome: "Pedro Santos",
            telefone: "456123789",
        },
        plano: {
            nome: "PREMIUM",
            status: "Inativo",
        },
    },
    {
        matricula: "2021009",
        usuario: {
            nome: "Ana Costa",
            telefone: "789456123",
        },
        plano: {
            nome: "BÁSICO",
            status: "Ativo",
        },
    },
    {
        matricula: "2021010",
        usuario: {
            nome: "Lucas Pereira",
            telefone: "321654987",
        },
        plano: {
            nome: "PREMIUM",
            status: "Inativo",
        },
    },
    {
        matricula: "2021011",
        usuario: {
            nome: "João Silva",
            telefone: "123456789",
        },
        plano: {
            nome: "BÁSICO",
            status: "Ativo",
        },
    },
    {
        matricula: "2021012",
        usuario: {
            nome: "Maria Oliveira",
            telefone: "987654321",
        },
        plano: {
            nome: "BÁSICO",
            status: "Ativo",
        },
    },
    {
        matricula: "2021013",
        usuario: {
            nome: "Pedro Santos",
            telefone: "456123789",
        },
        plano: {
            nome: "PREMIUM",
            status: "Inativo",
        },
    },
    {
        matricula: "2021014",
        usuario: {
            nome: "Ana Costa",
            telefone: "789456123",
        },
        plano: {
            nome: "BÁSICO",
            status: "Ativo",
        },
    },
    {
        matricula: "2021015",
        usuario: {
            nome: "Lucas Pereira",
            telefone: "321654987",
        },
        plano: {
            nome: "PREMIUM",
            status: "Inativo",
        },
    },
];

export default function AlunosPage() {
    return (
        <>
            <div className="flex items-center justify-between w-full">
                <h1 className="text-xl font-bold">Alunos</h1>
                <CriarAlunoDialog />
            </div>
            <Separator className="my-8" />

            <main className="flex flex-col h-full justify-between border rounded-md">
                <TabelaAlunos alunos={data} />
            </main>
        </>
    );
}
