import { TrocarPlano, TrocarPlanoSchema } from "@/models/plano-aluno-schemas";
import { atualizaPlanoAluno } from "@/services/plano-aluno-service";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export function useAtualizaPlanoAluno(matricula: string) {
    const [isOpen, setIsOpen] = useState(false);

    const queryClient = useQueryClient();

    const form = useForm<TrocarPlano>({
        resolver: zodResolver(TrocarPlanoSchema),
        defaultValues: {
            matricula: matricula,
        },
    });

    const mutation = useMutation({
        mutationFn: atualizaPlanoAluno,
        onSuccess: (planoAluno) => {
            queryClient.invalidateQueries({ queryKey: [planoAluno.matricula] });
            toast.success("Plano alterado com sucesso");
            form.reset();
            setIsOpen(false);
        },
        onError: () => toast.error("Algo deu errado"),
    });

    return { isOpen, setIsOpen, form, mutation };
}
