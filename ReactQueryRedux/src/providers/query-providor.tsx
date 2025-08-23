import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { ReactNode } from "react";
import toast from "react-hot-toast";

const queryClient = new QueryClient({
 queryCache: new QueryCache({
  onError:(err)=>{
    toast.error(err.message)
  }
 }),
 mutationCache: new MutationCache({
  onError:(err)=>{
    toast.error(err.message)
  }
 })
});

export const QueryProvider = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={import.meta.env.MODE === "development"} />
    </QueryClientProvider>
  );
};
