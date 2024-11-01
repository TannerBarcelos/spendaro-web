import axiosInstance from "@/lib/axios";

export const createBudget = async (budgetData: any) => {
  const response = await axiosInstance.post('/budgets', budgetData);
  return response.data;
};