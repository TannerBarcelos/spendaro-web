import { useQuery } from "@tanstack/react-query";
import { BudgetsResponse } from "../";
import axiosInstance from "@/lib/axios";

const getBudgets = async () => {
  const { data } = await axiosInstance.get<BudgetsResponse>("/budgets");
  return data;
};

export const useGetBudgets = () => {
  return useQuery({
    queryKey: ["budgets"],
    queryFn: getBudgets,
    retry: 3,
    staleTime: 1000 * 60 * 5, // 5 minutes (do not refetch data within 5 minutes unless explicitly told to)
  });
};
