import EditTransactionPage from '@/features/transactions/edit-transaction'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/(app)/_app/transactions/$transactionId/edit',
)({
  component: EditTransactionPage,
})
