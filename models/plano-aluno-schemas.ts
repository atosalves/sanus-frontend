import { z } from "zod";

export const TrocarPlanoSchema = z.object({
    matricula: z.string(),
    idPlanoNovo: z.coerce.number({ message: "O plano é obrigatório" }),
});

export type TrocarPlano = z.infer<typeof TrocarPlanoSchema>;
