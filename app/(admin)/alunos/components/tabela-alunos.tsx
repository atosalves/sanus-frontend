import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Pencil, Trash2 } from "lucide-react";

interface TabelaAlunosProps {
    alunos: {
        matricula: string;
        nome: string;
        email: string;
        telefone: string;
        cpf: string;
        status: string;
    }[];
}
export default function TabelaAlunos({ alunos }: TabelaAlunosProps) {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="text-center w-32">Matrícula</TableHead>
                    <TableHead>Nome</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead className="text-center">Telefone</TableHead>
                    <TableHead className="text-center">CPF</TableHead>
                    <TableHead className="text-center">Status do plano</TableHead>
                    <TableHead className="text-center">Ações</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {alunos.map(({ matricula, nome, email, telefone, cpf, status }) => (
                    <TableRow key={matricula}>
                        <TableCell className="text-center font-medium">{matricula}</TableCell>
                        <TableCell>{nome}</TableCell>
                        <TableCell>{email}</TableCell>
                        <TableCell className="text-center">{telefone}</TableCell>
                        <TableCell className="text-center">{cpf}</TableCell>
                        <TableCell className="text-center">{status}</TableCell>
                        <TableCell className="text-center space-x-2">
                            <Button>
                                <Pencil />
                            </Button>
                            <Button variant="destructive">
                                <Trash2 />
                            </Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
