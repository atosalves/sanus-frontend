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
import { Plus } from "lucide-react";
import FormularioAluno from "./formulario-aluno";
import { useState } from "react";

export default function CriarAlunoDialog() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Dialog onOpenChange={() => setIsOpen((prevUpdate) => !prevUpdate)} open={isOpen}>
            <DialogTrigger asChild>
                <Button>
                    <Plus />
                    Novo aluno
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
                <FormularioAluno setIsOpen={setIsOpen} />
            </DialogContent>
        </Dialog>
    );
}
