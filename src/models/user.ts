import { z } from "zod";

export const userSchemaAuth = z.object({
  email: z.string().email(),
  username: z.string(),
  password: z.string(),
  roles: z.array(
    z.object({
      name: z.enum(["ADMIN", "USER", "INVITED"]),
    })
  ),
});

export type UserAuthSchemaInfer = z.infer<typeof userSchemaAuth>;
