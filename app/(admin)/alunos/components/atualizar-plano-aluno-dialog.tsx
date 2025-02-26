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

interface AtualizaPlanoAlunoDialogProps {
    matricula: string;
}

export default function AtualizaPlanoAlunoDialog({ matricula }: AtualizaPlanoAlunoDialogProps) {
    const [isOpen, setIsOpen] = useState(false);

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
                <FormularioAtualizarPlanoAluno matricula={matricula} setIsOpen={setIsOpen} />
            </DialogContent>
        </Dialog>
    );
}
