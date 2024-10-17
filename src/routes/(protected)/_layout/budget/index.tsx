import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(protected)/_layout/budget/')({
  component: () => <BudgetPage />,
})

function BudgetPage() {
  return (
    <div>
      <h1 className="text-2xl">Budget</h1>
      <p>This is the budget page.</p>
    </div>
  )
}
