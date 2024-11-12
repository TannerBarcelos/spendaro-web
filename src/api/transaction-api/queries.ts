import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../axios";
import { TransactionsAPIResponse } from "./types";

export const useGetTransactions = (budget_id?: string) => {
  return useQuery({
    queryKey: ["transactions", budget_id],
    queryFn: async () => {
      const { data } = await axiosInstance.get<TransactionsAPIResponse>(`/budgets/${budget_id}/transactions`);
      return data;
    },
    retry: 0,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};
