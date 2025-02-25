import { z } from "zod";

import { CriarUsuarioDTO, UsuarioDetalhadoDTO, UsuarioResumidoDTO } from "./usuario-service";

const planoStatus = z.enum(["ATIVO", "CONGELADO", "BLOQUEADO"]);

export const AlunoResumidoDTO = z.object({
    matricula: z.string(),
    usuario: UsuarioResumidoDTO,
    nomePlano: z.string(),
    planoStatus: z.enum(["ATIVO", "CONGELADO", "BLOQUEADO"]),
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
    statusDoPlano: planoStatus,
});

export const CriarAlunoDTO = z.object({
    usuario: CriarUsuarioDTO,
    planoId: z.coerce.number(),
});
