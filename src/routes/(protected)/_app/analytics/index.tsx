import { AnalyticsPage } from '@/features/analytics'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(protected)/_app/analytics/')({
  component: () => <AnalyticsPage />,
})
