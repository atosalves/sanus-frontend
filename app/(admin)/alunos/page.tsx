import { Cabecalho } from "@/components/cabecalho";
import CriarAlunoDialog from "./components/criar-aluno-dialog";
import TabelaAlunos from "./components/tabela-alunos";

export default function AlunosPage() {
    return (
        <>
            <Cabecalho titulo="Lista de alunos">
                <CriarAlunoDialog />
            </Cabecalho>

            <TabelaAlunos />
        </>
    );
}
