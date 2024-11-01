import axiosInstance from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { Budget, BudgetResponse } from "..";
import { queryClient } from "@/lib/client";

const updateBudget = async (id: string, budgetData: any) => {
  const { data } = await axiosInstance.put<BudgetResponse>(`/budgets/${id}`, budgetData);
  return data
};

type UpdateArgs = { budget_id: string, budget_to_update: Partial<Budget> };

export const useUpdateBudget = () => {
  return useMutation({
    mutationFn: ({ budget_id, budget_to_update }: UpdateArgs) => updateBudget(budget_id, budget_to_update),
    onSettled: async () => await queryClient.invalidateQueries({queryKey: ["budgets"]}),
  })
}