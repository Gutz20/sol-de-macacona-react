import { z } from "zod";

export const formCorreoSchema = z.object({
  name: z.string(),
  email: z.string(),
  dni: z.string(),
  phone: z.string(),
  message: z.string(),
  terms: z.boolean(),
  promotions: z.string(),
});

export type FormSchemaCorreo = z.infer<typeof formCorreoSchema>;
