import { z } from "zod";
import { UsuarioResumidoDTO, UsuarioDetalhadoDTO, CriarUsuarioDTO } from "./usuario-service";

const planoStatus = z.enum(["ATIVO", "CONGELADO", "BLOQUEADO"]);

export const AlunoResumidoDTO = z.object({
    matricula: z.string(),
    usuario: UsuarioResumidoDTO,
    nomePlano: z.string(),
    planoStatus: z.enum(["ATIVO", "CONGELADO", "BLOQUEADO"]),
});

export const AlunoDetalhadoDTO = z.object({
    usuarioReponseDto: UsuarioDetalhadoDTO,
    matricula: z.string(),
    idPlano: z.coerce.number(),
    planoNome: z.string(),
    dataAssinatura: z.string(),
    dataVencimento: z.string(),
    statusPlano: planoStatus,
});

export const CriarAlunoDTO = z.object({
    usuario: CriarUsuarioDTO,
    planoId: z.coerce.number({ message: "Selecione um plano" }),
});
