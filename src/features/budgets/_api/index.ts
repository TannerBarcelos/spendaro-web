import axiosInstance from '@/lib/axios';

const BUDGET_BASE_URL = "/budgets"

const BUDGET_URLS = {
  getAllBudgets: `${BUDGET_BASE_URL}`,
}

export interface BudgetResponse {
  data:    Budget;
  message: string;
}

export interface BudgetsResponse {
  data:    Budget[];
  message: string;
}

export interface Budget {
  id:                 number;
  user_id:            number;
  budget_name:        string;
  budget_description: string;
  amount:             number;
  isFavorited:        boolean;
  createdAt:          Date;
  updatedAt:          Date;
}


export const getBudgets = async () => {
  const response = await axiosInstance.get<BudgetsResponse>(BUDGET_URLS.getAllBudgets);
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
