import { z } from "zod";

export const formLoteSchema = z.object({
  name: z.string(),
  state: z.string(),
  area: z.number(),
  adjacentAreas: z.array(z.string()),
});

export type FormSchemaLote = z.infer<typeof formLoteSchema>;
