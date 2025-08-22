import { z } from "zod";

const envSchema = z.object({
  VITE_BASE_URL: z.string().url()});

export const env = envSchema.parse({VITE_BASE_URL: import.meta.env.VITE_BASE_URL});
