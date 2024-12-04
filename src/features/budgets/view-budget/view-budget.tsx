import PageHeader from "@/components/page-header";
import { useBudgetStore } from "@/stores/budget-store";
import { useNavigate } from "@tanstack/react-router";
import { getRouteApi } from "@tanstack/react-router";

export function ViewBudget() {
  const navigate = useNavigate();
  // const { data } = BudgetRoute.useLoaderData();
  const thisRoute = getRouteApi("/(app)/_app/budgeting/$budgetId/"); // this is the preferred way to get the data from the route as importing the route config directly can cause circular dependencies. See https://tanstack.com/router/latest/docs/framework/react/guide/data-loading#consuming-data-from-loaders
  const { data } = thisRoute.useLoaderData();
  const { budgetId: current_budget_id } = thisRoute.useParams();

  const active_budget_id = useBudgetStore((state) => state.active_budget);

  // If a user switches the app-wide active budget while viewing a budget that's not the same, redirect to the new active budget
  if (active_budget_id !== current_budget_id) {
    navigate({
      to: `/budgeting/${active_budget_id}`,
    });
  }

  return (
    <div>
      <PageHeader text={data.budget_name} />
    </div>
  );
}
