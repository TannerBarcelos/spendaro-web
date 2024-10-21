import NewTransactionPage from "@/features/transactions/new-transaction";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(protected)/_app/transactions/new")({
  component: () => NewTransactionPage,
});
