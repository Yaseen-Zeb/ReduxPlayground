import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

type Props = {
    totalRows: number
}

export function Paging({ totalRows }: Props) {
    const [limit,setLimit] = useState(6);
    const [searchParams, setSearchParams] = useSearchParams();
    const page = parseInt(searchParams.get("page") || "1");
    const totalPages = Math.ceil(totalRows / limit);

    const handlePageChange = (page: number) => {
        setSearchParams((prev) => {
            const params = new URLSearchParams(prev);
            params.set("page", page.toString());
            return params;
        });
    };


    return (
        <Pagination className="flex justify-end">
            <PaginationContent>
                <PaginationItem className="cursor-pointer">
                    <PaginationPrevious onClick={() => handlePageChange(page - 1)}/>
                </PaginationItem>   
                <PaginationItem className="cursor-pointer">
                    <PaginationNext onClick={() => handlePageChange(page + 1)}  />
                </PaginationItem>   
               
            </PaginationContent>
        </Pagination>
    )
}
