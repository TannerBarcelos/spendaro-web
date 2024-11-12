import axiosInstance from "@/api/axios";
import { useMutation } from "@tanstack/react-query";
import { Budget, BudgetApiResponse } from "./types";
import { queryClient } from "@/api/query-client";

export const createBudget = async (budgetData: any) => {
  const response = await axiosInstance.post('/budgets', budgetData);
  return response.data;
};

export const deleteBudget = async (id: string) => {
  const response = await axiosInstance.delete(`/budgets/${id}`);
  return response.data;
};

const updateBudget = async (id: string, budgetData: any) => {
  const { data } = await axiosInstance.put<BudgetApiResponse>(`/budgets/${id}`, budgetData);
  return data
};

type UpdateArgs = { budget_id: string, budget_to_update: Partial<Budget> };

export const useUpdateBudget = () => {
  return useMutation({
    mutationFn: ({ budget_id, budget_to_update }: UpdateArgs) => updateBudget(budget_id, budget_to_update),
    onSettled: async () => await queryClient.invalidateQueries({queryKey: ["budgets"]}),
  })
}