import axiosInstance from "@/api/axios";
import { BudgetResponse, BudgetsResponse } from "./types";
import { useQuery } from "@tanstack/react-query";

export const getBudget = (budget_id: string) => {
  return {
    queryKey: ["budget", budget_id],
    queryFn: async (ctx: any) => {
      console.log(ctx);
      const { data } = await axiosInstance.get<BudgetResponse>(
        `/budgets/${budget_id}`
      );
      return data;
    },
    retry: 3,
    staleTime: 1000 * 60 * 5, // 5 minutes (do not refetch data within 5 minutes)
  };
};

// Note that this "query hook" does not use useQuery from react-query. This is because
// we are using the query via our context in the Tanstack Router Loader. This is a
// different way to use the query, but it is still a query hook. _see /src/routes/(protected)/_app/budgeting/$budgetId/index.tsx_

// export const Route = createFileRoute("/(protected)/_app/budgeting/$budgetId/")({
//   component: ViewBudget,
//   loader: ({ context: { queryClient }, params: { budgetId } }) => {
//     return queryClient.ensureQueryData(getBudgetOptions(budgetId));
//   },
// });

export const useGetBudgets = () => {
  return useQuery({
    queryKey: ["budgets"],
    queryFn: async () => {
      const { data } = await axiosInstance.get<BudgetsResponse>("/budgets");
      return data;
    },
    retry: 3,
    staleTime: 1000 * 60 * 5, // 5 minutes (do not refetch data within 5 minutes unless explicitly told to)
  });
};
