import { z } from "zod";

export const formLoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, { message: "Minimo 6 digitos" }),
});

export type FormSchemaLogin = z.infer<typeof formLoginSchema>;
