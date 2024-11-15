import { getBudget } from "@/api/budget-api/queries";
import { ViewBudget } from "@/features/budgets/view-budget/view-budget";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(app)/_app/budgeting/$budgetId/")({
  component: ViewBudget,
  loader: ({ context: { queryClient }, params: { budgetId } }) => {
    return queryClient.ensureQueryData(getBudget(budgetId));
  },
});
