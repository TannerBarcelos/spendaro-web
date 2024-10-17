import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(protected)/_layout/analytics/')({
  component: () => <AnalyticsPage />,
})

function AnalyticsPage() {
  return (
    <div>
      <h1 className="text-2xl">Analytics</h1>
      <p>This is the analytics page.</p>
    </div>
  )
}
