import { getBudget } from "@/api/budget-api/queries";
import { greetTimeOfDay as greet } from "@/lib/utils";
import { useBudgetStore } from "@/stores/budget-store";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "./ui/skeleton";
import { Button } from "./ui/button";
import { ArrowRightCircle } from "lucide-react";
import { Link } from "@tanstack/react-router";

function TopContextBar() {
  const active_budget = useBudgetStore((state) => state.active_budget);
  return (
    <div className="flex flex-row items-center justify-between w-full mb-6 h-16">
      <h1 className="text-xl lg:text-2xl font-semibold">{greet()}</h1>
      {active_budget && <ReadyToAssign budget_id={active_budget} />}
    </div>
  );
}

function ReadyToAssign({ budget_id }: { budget_id: string }) {
  const { data, isLoading, isError } = useQuery(getBudget(budget_id));
  const amount_left_to_assign = data?.data.amount;

  if (isLoading) return <Skeleton className="w-[250px] h-full" />;
  if (isError) return <p>Error</p>;

  // If there is an amount left to assign, show the ReadyToAssign component with the amount, otherwise return null
  if (data && data.data.amount !== 0) {
    return (
      <div className="flex flex-row items-center rounded-2xl p-3 w-[250px] dark:bg-[#6fdb9c] dark:text-background bg-green-300/90">
        <div className="flex flex-row items-center justify-between w-full">
          <div className="flex flex-col">
            <p className="text-xl font-semibold">${amount_left_to_assign}</p>
            <span className="text-xs font-normal">ready to assign</span>
          </div>
          <Link to={`/budgeting/${budget_id}`}>
            <Button
              className="ml-4 text-xs hover:text-none border border-background/20 text-card h-8 rounded-xl"
              variant="ghost"
            >
              Assign
              <ArrowRightCircle className="h-4 w-4 ml-1" />
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default TopContextBar;
