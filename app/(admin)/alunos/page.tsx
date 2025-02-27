import CriarAlunoDialog from "./components/criar-aluno-dialog";
import TabelaAlunos from "./components/tabela-alunos";

import { Separator } from "@/components/ui/separator";
import { Toaster } from "@/components/ui/sonner";

export default function AlunosPage() {
    return (
        <>
            <div className="flex items-center justify-between w-full">
                <h1 className="text-xl font-bold">Alunos</h1>
                <CriarAlunoDialog />
            </div>
            <Separator className="my-8" />

            <main className="flex flex-col h-full justify-between border rounded-md">
                <TabelaAlunos />
            </main>
            <Toaster />
        </>
    );
}
