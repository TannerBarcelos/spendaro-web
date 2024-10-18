import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/(protected)/_app/budgeting/$budgetId/edit',
)({
  component: () => <div>Hello /(protected)/_app/budget/$budgetId/edit!</div>,
})
