import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(protected)/_app/budget/create')({
  component: () => <div>Hello /(protected)/_layout/budget/create!</div>,
})
