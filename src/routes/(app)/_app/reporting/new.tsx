import { createFileRoute } from '@tanstack/react-router'
import { CreateReportPage } from '@/features/reporting/create/create-report'

export const Route = createFileRoute('/(app)/_app/reporting/new')({
  component: CreateReportPage,
})
