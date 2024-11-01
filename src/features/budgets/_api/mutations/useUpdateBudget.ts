import axiosInstance from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { Budget } from "..";
import { queryClient } from "@/lib/client";

const updateBudget = async (id: string, budgetData: any) => {
  const response = await axiosInstance.put<Budget>(`/budgets/${id}`, budgetData);
  return response;
};

type UpdateArgs = { budget_id: string, budget_to_update: Partial<Budget> };

export const useUpdateBudget = () => {
  return useMutation({
    mutationFn: ({ budget_id, budget_to_update }: UpdateArgs) => updateBudget(budget_id, budget_to_update),
    // enable optimistic updates
    onSettled: async () => await queryClient.invalidateQueries({queryKey: ["budgets"]}),
  })
}