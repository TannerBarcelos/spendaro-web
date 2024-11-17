import axiosInstance from "@/api/axios";
import { BudgetApiResponse, BudgetsApiResponse } from "./types";
import { useQuery } from "@tanstack/react-query";

export const getBudget = (budget_id: string) => {
  return {
    queryKey: ["budget", budget_id],
    queryFn: async () => {
      const { data } = await axiosInstance.get<BudgetApiResponse>(
        `/budgets/${budget_id}`
      );
      return data;
    },
    retry: 3,
    staleTime: 1000 * 60 * 5, // 5 minutes (do not refetch data within 5 minutes)
  };
};


export const useGetBudgets = () => {
  return useQuery({
    queryKey: ["budgets"],
    queryFn: async () => {
      const { data } = await axiosInstance.get<BudgetsApiResponse>("/budgets");
      return data;
    },
    retry: 3,
    staleTime: 1000 * 60 * 5,
  });
};
