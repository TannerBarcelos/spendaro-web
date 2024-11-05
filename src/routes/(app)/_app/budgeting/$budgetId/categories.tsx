import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/(app)/_app/budgeting/$budgetId/categories',
)({
  component: () => (
    <div>Hello /(protected)/_app/budget/$budgetId/categories!</div>
  ),
})
