import { z } from "zod";

export const formValidationSchema = z.object({
  name: z.string().min(1, { message: "Nombres Completos es requerido." }),
  dni: z
    .string()
    .min(8, { message: "Minimo de 8 caracteres." })
    .max(8, { message: "Maximo de 8 caracteres." }),
  mail: z.string().email("Email Invalido."),
  phone: z.string(),
  message: z.string().min(20, { message: "Ingresa tu opinión por favor." }),
  terms: z.boolean(),
  promotions: z.string().nullish(),
});

export type FormSchema = z.infer<typeof formValidationSchema>;
