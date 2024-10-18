import { ViewBudget } from '@/features/budgets/budget/view-budget'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(protected)/_app/budgeting/$budgetId/')({
  component: ViewBudget,
})
