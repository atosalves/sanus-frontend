import { z } from "zod";

export const UsuarioResumidoSchema = z.object({
    nome: z.string(),
    telefone: z.string(),
});

export const UsuarioDetalhadoSchema = z.object({
    id: z.coerce.number(),
    nome: z.string(),
    admin: z.boolean(),
    ativo: z.boolean(),
    email: z.string(),
    telefone: z.string(),
    cpf: z.string(),
});

export const CriarUsuarioSchema = z.object({
    admin: z.boolean(),
    nome: z.string().trim().nonempty("Insira um nome válido"),
    email: z.string().email("Insira um email válido"),
    telefone: z.string().trim().nonempty("Insira um telefone válido"),
    cpf: z.string().length(11, "O CPF deve conter 11 caracteres"),
});
