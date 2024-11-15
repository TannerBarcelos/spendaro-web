import PageHeader from "@/components/page-header";
import { Route as BudgetRoute } from "@/routes/(app)/_app/budgeting/$budgetId";

export function ViewBudget() {
  const { data } = BudgetRoute.useLoaderData();
  return (
    <div>
      <PageHeader text={data.budget_name} />
    </div>
  );
}
