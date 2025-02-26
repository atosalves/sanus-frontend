"use server";

import axios from "axios";
import { CriarAlunoDTO } from "./aluno-schemas";
import { z } from "zod";
import { revalidatePath, revalidateTag } from "next/cache";

export async function criarAluno(data: z.infer<typeof CriarAlunoDTO>) {
    const res = await axios.post("http://localhost:8080/alunos", data);

    return res;
}
