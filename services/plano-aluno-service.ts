import { TrocarPlano } from "../models/plano-aluno-schemas";
import { AlunoDetalhado } from "@/models/aluno-schemas";
import { fetcher } from "@/lib/utils";

const URL = "http://localhost:8080/alunos/planos";

export async function atualizaPlanoAluno(planoAlunoData: TrocarPlano): Promise<AlunoDetalhado> {
    const alunoAtualizado: AlunoDetalhado = await fetcher(URL, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(planoAlunoData),
    });

    return alunoAtualizado;
}
