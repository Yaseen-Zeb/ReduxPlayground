import { useQuery } from "@tanstack/react-query";
import { getPosts } from "./services";


export const useGetPosts = (page: number, limit: number) => {
    return useQuery({ queryKey: ['posts', page, limit], queryFn: () => getPosts(page, limit) })
}