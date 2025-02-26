import { z } from "zod";

export const UsuarioResumidoDTO = z.object({
    nome: z.string(),
    telefone: z.string(),
});

export const UsuarioDetalhadoDTO = z.object({
    id: z.coerce.number(),
    nome: z.string(),
    admin: z.boolean(),
    ativo: z.boolean(),
    email: z.string(),
    telefone: z.string(),
    cpf: z.string(),
});

export const CriarUsuarioDTO = z
    .object({
        admin: z.boolean(),
        nome: z.string().trim().nonempty("Insira um nome válido"),
        email: z.string().email("Insira um email válido"),
        telefone: z.string().trim().nonempty("Insira um telefone válido"),
        cpf: z.string().length(11),
    })
    .required();
