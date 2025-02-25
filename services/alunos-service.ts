import { z } from "zod";

export const UsuarioResumidoDTO = z.object({
    nome: z.string(),
    telefone: z.string(),
});

export const AlunoResumidoDTO = z.object({
    matricula: z.string(),
    usuario: UsuarioResumidoDTO,
    nomePlano: z.string(),
    planoStatus: z.enum(["ATIVO", "CONGELADO", "BLOQUEADO"]),
});

export const UsuarioDetalhadoDTO = z.object({
    admin: z.boolean(),
    ativo: z.boolean(),
    nome: z.string(),
    email: z.string(),
    telefone: z.string(),
    cpf: z.string(),
});

export const AlunoDetalhadoDTO = z.object({
    usuario: UsuarioDetalhadoDTO,
    matricula: z.string(),
    nomeDoPlano: z.string(),
    descricaoDoPlano: z.string(),
    diasDaSemanaDisponiveis: z.coerce.number(),
    valorDoPlano: z.coerce.number(),
    congelamentoDias: z.coerce.number(),
    dataAssinatura: z.string(),
    dataVencimento: z.string(),
    statusDoPlano: z.enum(["ATIVO", "CONGELADO", "BLOQUEADO"]),
});

export const CriarAlunoDTO = z.object({
    usuario: UsuarioDetalhadoDTO,
    planoId: z.coerce.number(),
});
