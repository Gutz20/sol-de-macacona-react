import { z } from "zod";

export const formValidationSchema = z.object({
  name: z.string().min(1, { message: "Nombres Completos es requerido" }),
  dni: z
    .number()
    .int()
    .positive()
    .min(8, { message: "Minimo de 8 caracteres" }),
  mail: z.string().email("Email Invalido"),
  phone: z.number(),
  message: z.string().min(20, { message: "Minimo de 20 caracteres" }),
  terms: z.boolean(),
  promotions: z.string().nullish(),
});

export type FormSchema = z.infer<typeof formValidationSchema>;
