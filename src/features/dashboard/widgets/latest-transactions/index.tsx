import { useGetTransactions } from "@/api/transaction-api/queries";
import { Transaction } from "@/api/transaction-api/types";
import Info from "@/components/Info";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useBudgetStore } from "@/stores/budget-store";
import { Link } from "@tanstack/react-router";
import { Edit, EllipsisVertical, EyeIcon, Plus } from "lucide-react";

export function LatestTransactionsWidget() {
  const activeBudget = useBudgetStore((state) => state.active_budget);
  const { data: result, isLoading } = useGetTransactions(activeBudget);
  return (
    <Card className="row-span-4">
      <WidgetTitle />
      <CardContent className="p-0 space-y-3 mt-2">
        {isLoading ? (
          <p>loading</p>
        ) : (
          <TransactionList transactions={result?.data} />
        )}
      </CardContent>
    </Card>
  );
}

const WidgetTitle = () => {
  return (
    <CardHeader>
      <CardTitle className="flex flex-row items-center justify-between">
        <div className="flex items-center justify-between">
          <h2 className="text-base lg:text-md font-medium text-foreground">
            Latest Transactions
          </h2>
          <Info info="A list of all your latest transactions across all your accounts and budgets" />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger className="hover:text-primary  rounded-2xl">
            <EllipsisVertical className="ml-auto size-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent sideOffset={3}>
            <Link to={"/transactions/new"}>
              <DropdownMenuItem>
                <Plus />
                Add a Transaction
              </DropdownMenuItem>
            </Link>
            <Link to={"/transactions"}>
              <DropdownMenuItem>
                <EyeIcon />
                View Latest Transactions
              </DropdownMenuItem>
            </Link>
            <Link to={"/transactions"}>
              <DropdownMenuItem>
                <Edit />
                Edit a Transaction
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardTitle>
    </CardHeader>
  );
};

const TransactionList = ({
  transactions,
}: {
  transactions?: Transaction[];
}) => {
  console.log(transactions);
  return transactions?.map((transaction) => {
    return (
      <div
        key={transaction.id}
        className="justify-between flex items-center bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 p-6 rounded-xl border"
      >
        <div>
          <p className="text-xs text-foreground">
            {transaction.transaction_description}
          </p>
        </div>
        <div className="flex items-center space-x-1">
          <p className="text-md text-foreground">
            ${transaction.transaction_amount}
          </p>
          <span className="text-[10px] text-muted-foreground">USD</span>
        </div>
      </div>
    );
  });
};
