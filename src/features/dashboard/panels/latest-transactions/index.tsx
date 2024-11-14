import { useGetTransactions } from "@/api/transaction-api/queries";
import { Transaction } from "@/api/transaction-api/types";
import Info from "@/components/more-info";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion } from "framer-motion";
import { useBudgetStore } from "@/stores/budget-store";
import { Link } from "@tanstack/react-router";
import {
  ArrowUpIcon,
  Edit,
  EllipsisVertical,
  EyeIcon,
  LandmarkIcon,
  Plus,
} from "lucide-react";
import LoadingSkeleton from "@/components/loading-skeleton";
import EmptyTransactionsState from "@/components/fallbacks/no-transactions";

export function LatestTransactionsWidget() {
  const activeBudget = useBudgetStore((state) => state.active_budget);
  const { data, isLoading } = useGetTransactions(activeBudget);
  return (
    <Card className="row-span-4 relative">
      <CardHeader>
        <CardTitle className="flex flex-row items-center justify-between">
          <div className="flex items-center justify-between">
            <h2 className="text-base md:text-md font-normal text-foreground">
              Latest Transactions
            </h2>
            <Info info="A list of all your latest transactions for the apps active budget" />
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
      <CardContent className="p-0 space-y-2 mt-3">
        {isLoading && (
          <LoadingSkeleton
            count={8}
            className="border border-foreground/5 justify-between flex items-center bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 p-2 rounded-md"
          />
        )}
        {(!data || data.data.length < 1) && !isLoading && (
          <EmptyTransactionsState showAddButton={false} />
        )}
        {data && <TransactionList transactions={data.data} />}
      </CardContent>
    </Card>
  );
}

const TransactionList = ({ transactions }: { transactions: Transaction[] }) => {
  return transactions?.map((transaction, index) => {
    return (
      <motion.li
        key={transaction.id}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        className="border border-foreground/5 justify-between flex items-center bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 p-2 rounded-xl hover:cursor-pointer"
      >
        <Link
          className="flex items-center p-2 w-full"
          to={`/transactions/${transaction.id}`}
        >
          <div className="rounded-full bg-blue-500/5 p-2 mr-4">
            <LandmarkIcon className="size-4" />
          </div>
          <h3 className="text-xs font-normal text-muted-foreground truncate">
            {transaction.transaction_description}
          </h3>
          <div className="flex items-center space-x-1 w-1/3 flex-1 justify-end ml-2">
            <p className="text-md text-foreground">
              ${transaction.transaction_amount}
            </p>
            <span className="text-[10px] text-muted-foreground">USD</span>
          </div>
        </Link>
      </motion.li>
    );
  });
};
