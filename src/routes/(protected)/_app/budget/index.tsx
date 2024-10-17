import { BudgetPage } from '@/features/budget'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(protected)/_app/budget/')({
  component: () => <BudgetPage />,
})
