import axios from "axios";
import CriarAlunoDialog from "./components/criar-aluno-dialog";
import TabelaAlunos from "./components/tabela-alunos";

import { Separator } from "@/components/ui/separator";
import { Toaster } from "@/components/ui/sonner";
import { revalidateTag } from "next/cache";
import { Button } from "@/components/ui/button";
import { AlunoResumidoDTO } from "@/services/aluno-schemas";
import { z } from "zod";

export default async function AlunosPage() {
    // const res = await axios.get("http://localhost:8080/alunos");
    const res = await fetch("http://localhost:8080/alunos", { next: { tags: ["alunos"] } });
    const data = await res.json();
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
            <Toaster />
        </>
    );
}
