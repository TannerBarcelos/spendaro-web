import { Route as BudgetRoute } from "@/routes/(app)/_app/budgeting/$budgetId";

export function ViewBudget() {
  const { data } = BudgetRoute.useLoaderData();
  return (
    <div>
      <h1 className="text-xl lg:text-2xl font-semibold">{data.budget_name}</h1>
    </div>
  );
}
