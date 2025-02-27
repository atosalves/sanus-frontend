import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import DetalhesAluno from "./components/detalhes-aluno";

export default async function AlunoPage({ params }: { params: Promise<{ matricula: string }> }) {
    const matricula = (await params).matricula;

    return (
        <>
            <Link href="/alunos" className="flex space-x-2 items-center">
                <ArrowLeft />
                <span>Voltar</span>
            </Link>

            <DetalhesAluno matricula={matricula} />
        </>
    );
}
