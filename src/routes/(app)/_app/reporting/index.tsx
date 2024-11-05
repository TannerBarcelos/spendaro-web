import { ReportingPage } from '@/features/reporting'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(app)/_app/reporting/')({
  component: ReportingPage,
})
