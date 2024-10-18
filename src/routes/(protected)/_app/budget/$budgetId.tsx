import { ViewBudget } from "@/features/budget/view/view-budget";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(protected)/_app/budget/$budgetId")({
  component: ViewBudget,
});
