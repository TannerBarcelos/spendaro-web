import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/transactions/")({
  component: () => <TransactionsPage />,
});

function TransactionsPage() {
  return (
    <div>
      <h1 className="text-2xl">Transactions</h1>
      <p>This is the transactions page.</p>
    </div>
  );
}
