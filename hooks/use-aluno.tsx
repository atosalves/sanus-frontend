import { criarAluno, buscarTodosAlunos, buscarAluno } from "@/services/aluno-service";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { CircleCheck } from "lucide-react";
import { toast } from "sonner";

export function useBuscarAluno(matricula: string) {
    return useQuery({
        queryKey: [matricula],
        queryFn: () => buscarAluno(matricula),
    });
}

export function useBuscarTodosAlunos() {
    return useQuery({
        queryKey: ["alunos"],
        queryFn: buscarTodosAlunos,
    });
}

export function useCriarAluno() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: criarAluno,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["alunos"] }),
                toast("Aluno criado com sucesso!", {
                    icon: <CircleCheck color="green" />,
                });
        },
    });
}
