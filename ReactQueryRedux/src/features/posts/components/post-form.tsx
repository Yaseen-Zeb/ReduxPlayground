import { Button } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { postFormDV, postFormSchema, type IPostForm } from "../api/schemas"
import type { IPost } from "../types"

type postFormProps = {
    type: "add"
} | {
    id: number
    type: "edit"
    post: IPostForm
}

export function PostForm(props: postFormProps) {
    const { type } = props

    const form = useForm<IPostForm>({
        resolver: zodResolver(postFormSchema),
        defaultValues: type === "edit" ? props.post : postFormDV,
    })

    const onSubmit = (data: IPostForm) => {
        console.log(data)
    }


    const title = type === "add" ? "Add Post" : "Edit Post"
    const description = type === "add" ? "Add a new post" : "Edit the post"
    const buttonText = type === "add" ? "Add Post" : "Save changes"
    return (
        <Dialog>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <DialogTrigger asChild>
                        {type === "add" ? <Button>Add Post</Button> : <Button variant="outline" size="sm">Edit Post</Button>}
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader className="space-y-0">
                            <DialogTitle>{title}</DialogTitle>
                            <DialogDescription>
                                {description}
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4">
                            <div className="grid gap-3">
                                <FormField
                                    control={form.control}
                                    name="title"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Title</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Title" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="grid gap-3">
                                <FormField
                                    control={form.control}
                                    name="body"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Body</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Body" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>
                        <DialogFooter>
                            <DialogClose asChild>
                                <Button variant="outline">Cancel</Button>
                            </DialogClose>
                            <Button type="submit">{buttonText}</Button>
                        </DialogFooter>
                    </DialogContent>
                </form>
            </Form>
        </Dialog>
    )
}
