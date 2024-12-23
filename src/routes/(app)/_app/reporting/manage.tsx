import { ManageReportPage } from '@/features/reporting/manage/manage-report'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(app)/_app/reporting/manage')({
  component: ManageReportPage,
})
