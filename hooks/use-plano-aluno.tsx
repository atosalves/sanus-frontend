import { atualizaPlanoAluno } from "@/services/plano-aluno-service";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CircleCheck } from "lucide-react";
import { toast } from "sonner";

export function useAtualizaPlanoAluno() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: atualizaPlanoAluno,
        onSuccess: (planoAluno) => {
            queryClient.invalidateQueries({ queryKey: [planoAluno.matricula] }),
                toast("Plano alterado com sucesso!", {
                    icon: <CircleCheck color="green" />,
                });
        },
    });
}
