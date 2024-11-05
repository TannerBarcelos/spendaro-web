import NewTransactionPage from '@/features/transactions/new-transaction'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(app)/_app/transactions/new')({
  component: () => NewTransactionPage,
})
