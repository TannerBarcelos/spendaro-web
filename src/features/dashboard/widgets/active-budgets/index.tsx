import Info from "@/components/Info";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";
import { Budget } from "@/features/budgets/_api";
import { useGetBudgets } from "@/features/budgets/_api/queries/useGetBudgets";
import { Link } from "@tanstack/react-router";
import { EllipsisVertical, EyeIcon, Plus } from "lucide-react";

export function ActiveBudgetsWidget() {
  const { data, isLoading, isError } = useGetBudgets();
  return (
    <Card>
      <WidgetTitle />
      <CardContent className="p-0 overflow-hidden">
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
        {data &&
          data.data.map((budget) => (
            <Link to={`/budgeting/${budget.id}`}>
              <ActiveBudget key={budget.id} {...budget} />
            </Link>
          ))}
      </CardContent>
    </Card>
  );
}

const ActiveBudget = (budget: Budget) => {
  const budget_zero = budget.amount === 0;
  return (
    <div className="border-2 bg-card/30 min-h-20 grid grid-cols-2 mb-4 rounded-xl p-2 hover:cursor-pointer hover:bg-card/10">
      <div className="w-full flex flex-col justify-center">
        <p className="text-sm">{budget.budget_name}</p>
        <p className="text-xs text-foreground/70 truncate">
          {budget.budget_description}
        </p>
      </div>
      <div className={`items-center flex justify-center font-base text-[13px]`}>
        <p
          className={`${!budget_zero ? "text-red-500 bg-red-500/30 dark:text-red-400 dark:bg-red-900/30 p-1 rounded-sm" : "text-green-600 bg-green-500/30 dark:text-green-500 dark:bg-green-900/20 p-1 rounded-sm"} text-xs`}
        >
          {!budget_zero ? `$${budget.amount}` : "Budget Zero!"}
        </p>
      </div>
    </div>
  );
};

const WidgetTitle = () => {
  return (
    <CardHeader>
      <CardTitle className="flex flex-row items-center justify-between">
        <div className="flex items-center justify-between">
          <h2 className="text-base lg:text-md font-medium text-foreground">
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
