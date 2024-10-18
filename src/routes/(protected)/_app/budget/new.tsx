import CreateBudgetPage from "@/features/budget/create";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(protected)/_app/budget/new")({
  component: () => <CreateBudgetPage />,
});
