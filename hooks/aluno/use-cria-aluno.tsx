import { CriarAluno, CriarAlunoSchema } from "@/models/aluno-schemas";
import { criarAluno } from "@/services/aluno-service";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export function useCriaAluno() {
    const [isOpen, setIsOpen] = useState(false);

    const queryClient = useQueryClient();

    const form = useForm<CriarAluno>({
        resolver: zodResolver(CriarAlunoSchema),
        defaultValues: {
            usuario: {
                admin: false,
                nome: "",
                email: "",
                telefone: "",
                cpf: "",
            },
        },
    });

    const mutation = useMutation({
        mutationFn: criarAluno,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["alunos"] }), toast.success("Aluno criado com sucesso.");
            form.reset();
            setIsOpen(false);
        },
        onError: () => toast.error("Algo deu errado ao criar um aluno."),
    });

    return { isOpen, setIsOpen, form, mutation };
}
