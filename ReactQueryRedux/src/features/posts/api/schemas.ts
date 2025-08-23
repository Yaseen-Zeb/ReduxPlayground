import { z } from "zod"
 
export const postFormSchema = z.object({
  title: z.string().min(1,"Title is required").max(50,"Title must be less than 50 characters"),
  body: z.string().min(1,"Body is required").max(50,"Body must be less than 50 characters"),
})

export type IPostForm = z.infer<typeof postFormSchema>

export const postFormDV : IPostForm = {
    title: "",
    body: "",
}
