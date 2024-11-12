import { getTransaction } from "@/api/transaction-api/queries";
import TransactionPage from "@/features/transactions/view-transaction";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(app)/_app/transactions/$transactionId")(
  {
    component: TransactionPage,
    loader: async ({ context: { queryClient }, params: { transactionId } }) => {
      return queryClient.ensureQueryData(getTransaction(transactionId));
    },
  }
);
