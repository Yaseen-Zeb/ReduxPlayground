import api from "@/lib/api"
import type { IPost } from "../types"

const getPosts = async (page: number, limit: number) => {
    const response = await api.get<IPost[]>(`/posts?_totalRows=true&_page=${page}&_limit=${limit}`)
    const totalRows = Number(response.headers["x-total-count"] ?? 0)
    const data = response.data
    return {data,totalRows}
}

export { getPosts }