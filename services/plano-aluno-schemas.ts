import { z } from "zod";

export const TrocarPlanoSchema = z.object({
    matricula: z.string(),
    idPlanoNovo: z.coerce.number(),
});
