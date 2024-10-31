import { useQuery } from "@tanstack/react-query";
import { getBudget, getBudgets } from ".";

export const useGetBudgets = () => {
  return useQuery({
    queryKey: ["budgets"],
    queryFn: getBudgets,
    retry: 3,
    staleTime: 1000 * 60 * 5, // 5 minutes (do not refetch data within 5 minutes)
  });
};

export const getBudgetOptions = (budget_id: string) => {
  return {
    queryKey: ["budget", budget_id],
    queryFn: () => getBudget(budget_id),
    retry: 3,
    staleTime: 1000 * 60 * 5, // 5 minutes (do not refetch data within 5 minutes)
  };
}