import { Page as BudgetPage } from "@/features/budgets";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(protected)/_app/budgeting/")({
  component: BudgetPage,
});
