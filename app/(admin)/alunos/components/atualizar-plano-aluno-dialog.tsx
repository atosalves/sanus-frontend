"use client";

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { ArrowDownUpIcon } from "lucide-react";
import { useState } from "react";
import FormularioAtualizarPlanoAluno from "./formulario-atualizar-plano-aluno";
import { useAtualizaPlanoAluno } from "@/hooks/use-plano-aluno";

export default function AtualizaPlanoAlunoDialog({ matricula }: { matricula: string }) {
    const [isOpen, setIsOpen] = useState(false);
    const { mutate, error, isPending } = useAtualizaPlanoAluno();

    return (
        <Dialog onOpenChange={() => setIsOpen((prevUpdate) => !prevUpdate)} open={isOpen}>
            <DialogTrigger asChild>
                <Button>
                    <ArrowDownUpIcon />
                    Trocar plano
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Adicionar aluno</DialogTitle>
                    <DialogDescription>
                        Este é o formulário para adicionar um novo aluno. Preencha os campos abaixo e clique em
                        "Adiconar".
                    </DialogDescription>
                </DialogHeader>
                <FormularioAtualizarPlanoAluno
                    matricula={matricula}
                    onSubmit={(modelFormData) =>
                        mutate(
                            modelFormData,

                            {
                                onSuccess: () => {
                                    setIsOpen((prevUpdate) => !prevUpdate);
                                },
                            }
                        )
                    }
                    isPendente={isPending}
                    erro={error}
                />
            </DialogContent>
        </Dialog>
    );
}
