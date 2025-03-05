"use server";

import { fetcher } from "@/lib/utils";
import { AlunoDetalhado, AlunoResumido, CriarAluno } from "../models/aluno-schemas";

const URL = "http://localhost:8080/alunos";

export async function criarAluno(alunoFormData: CriarAluno): Promise<AlunoResumido> {
    const novoAluno: AlunoResumido = await fetcher(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(alunoFormData),
    });

    return novoAluno;
}

export async function buscarAluno(matricula: string): Promise<AlunoDetalhado> {
    const aluno: AlunoDetalhado = await fetcher(`${URL}/${matricula}`);

    return aluno;
}

export async function buscarTodosAlunos(): Promise<AlunoResumido[]> {
    const alunos: AlunoResumido[] = await fetcher(URL);

    return alunos;
}
