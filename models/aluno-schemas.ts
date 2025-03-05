import { z } from "zod";
import { CriarUsuarioSchema, UsuarioDetalhadoSchema, UsuarioResumidoSchema } from "./usuario-schemas";

const planoStatus = z.enum(["ATIVO", "CONGELADO", "BLOQUEADO"]);

const AlunoResumidoSchema = z.object({
    matricula: z.string(),
    usuario: UsuarioResumidoSchema,
    nomePlano: z.string(),
    planoStatus: z.enum(["ATIVO", "CONGELADO", "BLOQUEADO"]),
});

const AlunoDetalhadoSchema = z.object({
    usuarioReponseDto: UsuarioDetalhadoSchema,
    matricula: z.string(),
    idPlano: z.coerce.number(),
    planoNome: z.string(),
    dataAssinatura: z.string(),
    dataVencimento: z.string(),
    statusPlano: planoStatus,
});

export const CriarAlunoSchema = z.object({
    usuario: CriarUsuarioSchema,
    planoId: z.coerce.number({ message: "Selecione um plano" }),
});

export type AlunoResumido = z.infer<typeof AlunoResumidoSchema>;
export type AlunoDetalhado = z.infer<typeof AlunoDetalhadoSchema>;
export type CriarAluno = z.infer<typeof CriarAlunoSchema>;
