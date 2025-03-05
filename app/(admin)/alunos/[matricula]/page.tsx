import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import DetalhesAluno from "./components/detalhes-aluno";
import { Cabecalho } from "@/components/cabecalho";
import { Button } from "@/components/ui/button";

export default async function AlunoPage({ params }: { params: Promise<{ matricula: string }> }) {
    const matricula = (await params).matricula;

    return (
        <>
            <Cabecalho titulo={`Aluno: ${matricula}`}>
                <Link href="/alunos" className="flex space-x-2 items-center">
                    <Button variant="link">
                        <ArrowLeft />
                        <span>Voltar</span>
                    </Button>
                </Link>
            </Cabecalho>

            <DetalhesAluno matricula={matricula} />
        </>
    );
}
