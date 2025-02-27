"use server";

import { AlunoDetalhadoDTO, AlunoResumidoDTO, CriarAlunoDTO } from "./aluno-schemas";
import { z } from "zod";

const URL = "http://localhost:8080/alunos";

export async function criarAluno(modelFormData: z.infer<typeof CriarAlunoDTO>): Promise<z.infer<typeof CriarAlunoDTO>> {
    const response = await fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(modelFormData),
    });

    if (!response.ok) {
        throw new Error("Algo deu errado.");
    }

    const data = await response.json();

    return data;
}

export async function buscarAluno(matricula: string): Promise<z.infer<typeof AlunoDetalhadoDTO>> {
    const response = await fetch(`${URL}/${matricula}`);

    if (!response.ok) {
        throw new Error("Algo deu errado: " + response.status);
    }

    const data = await response.json();

    return data;
}

export async function buscarTodosAlunos(): Promise<z.infer<typeof AlunoResumidoDTO>[]> {
    const response = await fetch(URL);

    if (!response.ok) {
        throw new Error("Algo deu errado: " + response.status);
    }

    const data = await response.json();

    return z.array(AlunoResumidoDTO).parse(data);
}
