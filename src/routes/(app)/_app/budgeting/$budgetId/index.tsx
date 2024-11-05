import { getBudgetOptions } from '@/features/budgets/_api/queries/useGetBudget'
import { ViewBudget } from '@/features/budgets/budget/view-budget'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(app)/_app/budgeting/$budgetId/')({
  component: ViewBudget,
  loader: ({ context: { queryClient }, params: { budgetId } }) => {
    return queryClient.ensureQueryData(getBudgetOptions(budgetId))
  },
})