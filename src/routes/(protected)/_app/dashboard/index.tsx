import { DashboardPage } from '@/features/dashboard'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(protected)/_app/dashboard/')({
  component: () => <DashboardPage />,
})
