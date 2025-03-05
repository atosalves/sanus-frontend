import { buscarAluno } from "@/services/aluno-service";
import { useQuery } from "@tanstack/react-query";

export function useBuscaAluno(matricula: string) {
    const query = useQuery({
        queryKey: [matricula],
        queryFn: () => buscarAluno(matricula),
    });

    return query;
}
