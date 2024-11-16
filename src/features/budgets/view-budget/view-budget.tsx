import PageHeader from "@/components/page-header";
import { Route as BudgetRoute } from "@/routes/(app)/_app/budgeting/$budgetId";
import { useBudgetStore } from "@/stores/budget-store";
import { useNavigate } from "@tanstack/react-router";

export function ViewBudget() {
  const active_budget_id = useBudgetStore((state) => state.active_budget);
  const navigate = useNavigate();
  const current_budget_id = BudgetRoute.useParams().budgetId;

  // If a user switches the app-wide active budget while viewing a budget that's not the same, redirect to the new active budget
  if (active_budget_id !== current_budget_id) {
    navigate({
      to: `/budgeting/${active_budget_id}`,
    });
  }

  const { data } = BudgetRoute.useLoaderData();

  // Another way to get the data - all router apis have the select mechanism
  // const budget = BudgetRoute.useLoaderData({
  //   select: (data) => data.data,
  // });

  return (
    <div>
      <PageHeader text={data.budget_name} />
    </div>
  );
}
