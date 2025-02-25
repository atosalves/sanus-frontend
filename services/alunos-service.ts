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

export const AlunoDetalhadoDTO = z.object({
    matricula: z.string(),
    usuario: z.object({
        nome: z.string(),
        email: z.string(),
        telefone: z.string(),
        cpf: z.string(),
    }),
    plano: z.object({
        nome: z.string(),
        status: z.string(),
    }),
});

export const CriarAlunoDTO = z.object({
    matricula: z.string(),
    usuario: z.object({
        nome: z.string(),
        telefone: z.string(),
    }),
    plano: z.object({
        nome: z.string(),
        status: z.string(),
    }),
});
