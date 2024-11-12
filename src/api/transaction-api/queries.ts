import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../axios";
import { TransactionAPIResponse, TransactionsAPIResponse } from "./types";
import { useBudgetStore } from "@/stores/budget-store";

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

export const getTransaction = (transaction_id: string) => {
  const active_budget = useBudgetStore.getState().active_budget;
  return {
    queryKey: ["transactions", transaction_id, active_budget],
    queryFn: async () => {
      const { data } = await axiosInstance.get<TransactionAPIResponse>(`/budgets/${active_budget}/transactions/${transaction_id}`);
      return data;
    },
    retry: 0,
    staleTime: 1000 * 60 * 5, // 5 minutes
  }
}