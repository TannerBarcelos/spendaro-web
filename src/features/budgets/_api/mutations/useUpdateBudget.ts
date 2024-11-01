import axiosInstance from "@/lib/axios";

export const updateBudget = async (id: string, budgetData: any) => {
  const response = await axiosInstance.put(`/budgets/${id}`, budgetData);
  return response.data;
};