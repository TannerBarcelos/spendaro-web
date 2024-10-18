import CreateBudgetPage from "@/features/budgets/create";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(protected)/_app/budgeting/new")({
  component: CreateBudgetPage,
});
