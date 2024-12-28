import axiosInstance from "@/api/axios";
import { useMutation } from "@tanstack/react-query";
import { Budget, BudgetApiResponse } from "./types";
import { queryClient } from "@/api/query-client";
import { BudgetToCreate } from "@/features/budgets/_components/budget-form";

export const deleteBudget = async (id: string) => {
  const response = await axiosInstance.delete(`/budgets/${id}`);
  return response.data;
};

export const useCreateBudget = () => {
  return useMutation<BudgetApiResponse, Error, BudgetToCreate>({
    mutationFn: async (budgetToCreate) => {
      const { data } = await axiosInstance.post<BudgetApiResponse>(
        "/budgets",
        budgetToCreate
      );
      return data;
    },
    onSettled: async () =>
      await queryClient.invalidateQueries({ queryKey: ["budgets"] }),
    retry: 1,
  });
};

type TUpdateBudgetArgs = { budget_id: string; budget_to_update: Partial<Budget> };

export const useUpdateBudget = () => {
  return useMutation<BudgetApiResponse, Error, TUpdateBudgetArgs>({
    mutationFn: async ({ budget_id, budget_to_update }) => {
      const { data } = await axiosInstance.put<BudgetApiResponse>(
        `/budgets/${budget_id}`,
        budget_to_update
      );
      return data;
    },
    onSettled: async () =>
      await queryClient.invalidateQueries({ queryKey: ["budgets"] }),
  });
};
