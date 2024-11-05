import { TransactionsPage } from '@/features/transactions'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(app)/_app/transactions/')({
  component: TransactionsPage,
})
