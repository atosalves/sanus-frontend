import { z } from "zod";

export const UsuarioResumidoDTO = z.object({
    nome: z.string(),
    telefone: z.string(),
});

export const UsuarioDetalhadoDTO = z.object({
    admin: z.boolean(),
    ativo: z.boolean(),
    nome: z.string(),
    email: z.string(),
    telefone: z.string(),
    cpf: z.string(),
});

export const CriarUsuarioDTO = z.object({
    admin: z.boolean(),
    nome: z.string(),
    email: z.string(),
    telefone: z.string(),
    cpf: z.string(),
});
