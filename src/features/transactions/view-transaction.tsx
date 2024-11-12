import { Route as TransactionRoute } from "@/routes/(app)/_app/transactions/$transactionId";

function TransactionPage() {
  const transaction = TransactionRoute.useLoaderData();
  return (
    <div>
      <h1>{transaction.data.transaction_description}</h1>
    </div>
  );
}

export default TransactionPage;
