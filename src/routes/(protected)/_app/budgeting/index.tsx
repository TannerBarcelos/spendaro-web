import { BudgetPage } from "@/features/budgeting";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(protected)/_app/budgeting/")({
  component: BudgetPage,
});
