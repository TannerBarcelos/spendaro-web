import CreateBudgetPage from "@/features/budgeting/create";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(protected)/_app/budgeting/new")({
  component: CreateBudgetPage,
});
