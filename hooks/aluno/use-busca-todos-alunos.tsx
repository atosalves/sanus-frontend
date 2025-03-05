import { buscarTodosAlunos } from "@/services/aluno-service";
import { useQuery } from "@tanstack/react-query";

export function useBuscaTodosAlunos() {
    const query = useQuery({
        queryKey: ["alunos"],
        queryFn: buscarTodosAlunos,
    });

    return query;
}
