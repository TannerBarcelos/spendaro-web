import { Page as BudgetPage } from '@/features/budgets'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(app)/_app/budgeting/')({
  component: BudgetPage,
})
