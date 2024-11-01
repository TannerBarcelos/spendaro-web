import axiosInstance from "@/lib/axios";
import { BudgetResponse } from "../";

const getBudget = async (budget_id: string) => {
  const response = await axiosInstance.get<BudgetResponse>(`/budgets/${budget_id}`);
  return response.data;
}

export const getBudgetOptions = (budget_id: string) => {
  return {
    queryKey: ["budget", budget_id],
    queryFn: () => getBudget(budget_id),
    retry: 3,
    staleTime: 1000 * 60 * 5, // 5 minutes (do not refetch data within 5 minutes)
  };
}

// Note that this "query hook" does not use useQuery from react-query. This is because
// we are using the query via our context in the Tanstack Router Loader. This is a
// different way to use the query, but it is still a query hook. _see /src/routes/(protected)/_app/budgeting/$budgetId/index.tsx_

// export const Route = createFileRoute("/(protected)/_app/budgeting/$budgetId/")({
//   component: ViewBudget,
//   loader: ({ context: { queryClient }, params: { budgetId } }) => {
//     return queryClient.ensureQueryData(getBudgetOptions(budgetId));
//   },
// });