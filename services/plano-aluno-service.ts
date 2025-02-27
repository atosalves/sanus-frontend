import { z } from "zod";
import { TrocarPlanoSchema } from "./plano-aluno-schemas";

const URL = "http://localhost:8080/alunos/planos";

export async function atualizaPlanoAluno(
    planoAlunoData: z.infer<typeof TrocarPlanoSchema>
): Promise<z.infer<typeof TrocarPlanoSchema>> {
    const response = await fetch(URL, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(planoAlunoData),
    });

    if (!response.ok) {
        throw new Error("Algo deu errado.");
    }

    const data = await response.json();

    return data;
}
