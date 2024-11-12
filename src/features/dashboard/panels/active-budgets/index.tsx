import Info from "@/components/Info";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";
import { Budget } from "@/api/budget-api/types";
import { useGetBudgets } from "@/api/budget-api/queries";
import { Link } from "@tanstack/react-router";
import { EllipsisVertical, EyeIcon, Plus } from "lucide-react";
import { motion } from "framer-motion";
import NoActiveBudgets from "@/features/dashboard/panels/active-budgets/no-active-budgets";

export function ActiveBudgetsWidget() {
  const { data, isLoading, isError } = useGetBudgets();
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex flex-row items-center justify-between">
          <div className="flex items-center justify-between">
            <h2 className="text-base md:text-md font-normal text-foreground">
              Active Budgets
            </h2>
            <Info info="A list of all your active budgets" />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger className="hover:text-primary rounded-2xl">
              <EllipsisVertical className="ml-auto size-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent sideOffset={3}>
              <Link to={"/budgeting/new"}>
                <DropdownMenuItem>
                  <Plus />
                  Create a Budget
                </DropdownMenuItem>
              </Link>
              <Link to={"/budgeting"}>
                <DropdownMenuItem>
                  <EyeIcon />
                  View a Budget
                </DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0 overflow-hidden mt-2 space-y-3">
        {isLoading && (
          <>
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <BudgetSkeleton key={`skeleton-${i}`} />
              ))}
          </>
        )}
        {isError && <p>Something went wrong</p>}
        {(!data || !data.data.length) && !isLoading && <NoActiveBudgets />}
        {data &&
          data.data.map((budget, index) => (
            <Link to={`/budgeting/${budget.id}`} key={budget.id}>
              <motion.li
                key={budget.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="mb-2 border border-foreground/5 justify-between flex items-center bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 rounded-xl list-none"
              >
                <ActiveBudget key={budget.id} {...budget} />
              </motion.li>
            </Link>
          ))}
      </CardContent>
    </Card>
  );
}

const ActiveBudget = (budget: Budget) => {
  const budget_zero = budget.amount === 0;
  return (
    <div
      className={`grid grid-cols-2 rounded-xl hover:cursor-pointer hover:bg-card/10 p-4 dark:bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ${!budget_zero ? "dark:bg-gradient-to-r dark:from-transparent dark:to-red-950/40" : "dark:bg-gradient-to-r dark:from-transparent dark:to-green-950/20"}`}
    >
      <div className="w-full flex flex-col justify-center">
        <p className="text-sm">{budget.budget_name}</p>
        <p className="text-xs text-foreground/70 truncate">
          {budget.budget_description}
        </p>
      </div>
      <div className={`items-center flex justify-center font-base text-[13px]`}>
        <p
          className={`${!budget_zero ? "text-red-500 dark:text-red-400 p-1 rounded-sm" : "text-green-600 dark:text-green-600/90 p-1 rounded-sm"} text-xs`}
        >
          {!budget_zero ? `$${budget.amount} util goal` : "Budget Zero!"}
        </p>
      </div>
    </div>
  );
};

const BudgetSkeleton = () => {
  return (
    <div className="border-2 bg-card/30 min-h-20 grid grid-cols-2 mb-4 rounded-xl p-2">
      <div className="w-full flex flex-col justify-center gap-2">
        <Skeleton className="h-4 w-24 bg-muted animate-pulse rounded" />
        <Skeleton className="h-3 w-32 bg-muted animate-pulse rounded" />
      </div>
      <div className="items-center flex justify-center">
        <Skeleton className="h-6 w-16 bg-muted animate-pulse rounded" />
      </div>
    </div>
  );
};
