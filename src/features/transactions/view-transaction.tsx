import { getRouteApi } from "@tanstack/react-router";

function TransactionPage() {
  const thisRoute = getRouteApi("/(app)/_app/transactions/$transactionId/");
  const { data: transaction } = thisRoute.useLoaderData();
  return (
    <div>
      <h1>{transaction.transaction_description}</h1>
    </div>
  );
}

export default TransactionPage;
