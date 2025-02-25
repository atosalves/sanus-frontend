"use client";

import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AlunoResumidoDTO } from "@/services/alunos-service";
import { AlertCircle } from "lucide-react";
import { z } from "zod";

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

import { useState } from "react";
import Link from "next/link";

const NUM_TOTAL_ALUNOS_POR_PAGINA = 12;

interface TabelaAlunosProps {
    alunos: z.infer<typeof AlunoResumidoDTO>[];
}

export default function TabelaAlunos({ alunos }: TabelaAlunosProps) {
    const numPaginas = Math.ceil(alunos.length / NUM_TOTAL_ALUNOS_POR_PAGINA);

    const [paginaAtual, setPaginaAtual] = useState(1);

    const [alunosPorPagina, setAlunosPorPagina] = useState(alunos.slice(paginaAtual - 1, NUM_TOTAL_ALUNOS_POR_PAGINA));

    function handleProximaPagina() {
        if (paginaAtual === numPaginas) return;

        setPaginaAtual((prevPag) => prevPag + 1);
        setAlunosPorPagina(
            alunos.slice(paginaAtual * NUM_TOTAL_ALUNOS_POR_PAGINA, (paginaAtual + 1) * NUM_TOTAL_ALUNOS_POR_PAGINA)
        );
    }

    function handlePaginaAnterior() {
        if (paginaAtual === 1) return;
        setPaginaAtual((prevPag) => prevPag - 1);
        setAlunosPorPagina(
            alunos.slice(
                (paginaAtual - 2) * NUM_TOTAL_ALUNOS_POR_PAGINA,
                (paginaAtual - 1) * NUM_TOTAL_ALUNOS_POR_PAGINA
            )
        );
    }

    return (
        <>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="text-center w-32">Matrícula</TableHead>
                        <TableHead>Nome</TableHead>
                        <TableHead className="text-center">Telefone</TableHead>
                        <TableHead className="text-center">Plano</TableHead>
                        <TableHead className="text-center">Status do plano</TableHead>
                        <TableHead className="text-center">Ações</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {alunosPorPagina.map(({ matricula, usuario, nomePlano, planoStatus }) => (
                        <TableRow key={matricula}>
                            <TableCell className="text-center font-medium">{matricula}</TableCell>
                            <TableCell>{usuario.nome}</TableCell>
                            <TableCell className="text-center">{usuario.telefone}</TableCell>
                            <TableCell className="text-center">{nomePlano}</TableCell>
                            <TableCell className="text-center">{planoStatus}</TableCell>
                            <TableCell className="text-center space-x-2">
                                <Link href={`alunos/${matricula}`}>
                                    <Button variant="ghost">
                                        <AlertCircle />
                                        Mais informações
                                    </Button>
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Pagination className="p-2">
                <PaginationContent>
                    <PaginationItem className="w-32 justify-items-end">
                        {paginaAtual > 1 ? (
                            <PaginationPrevious href={`#${paginaAtual - 1}`} onClick={handlePaginaAnterior} />
                        ) : (
                            <PaginationEllipsis />
                        )}
                    </PaginationItem>

                    <PaginationItem>
                        <PaginationLink href={`#${paginaAtual}`} isActive>
                            {paginaAtual}
                        </PaginationLink>
                    </PaginationItem>

                    <PaginationItem className="w-32">
                        {paginaAtual < numPaginas ? (
                            <PaginationNext href={`#${paginaAtual + 1}`} onClick={handleProximaPagina} />
                        ) : (
                            <PaginationEllipsis />
                        )}
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </>
    );
}
