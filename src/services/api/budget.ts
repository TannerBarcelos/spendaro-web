// services/budgetService.ts
import axiosInstance from '../axios';

export const getBudgets = async () => {
  const response = await axiosInstance.get('/budgets');
  return response.data;
};

export const createBudget = async (budgetData: any) => {
  const response = await axiosInstance.post('/budgets', budgetData);
  return response.data;
};

export const updateBudget = async (id: string, budgetData: any) => {
  const response = await axiosInstance.put(`/budgets/${id}`, budgetData);
  return response.data;
};

export const deleteBudget = async (id: string) => {
  const response = await axiosInstance.delete(`/budgets/${id}`);
  return response.data;
};
