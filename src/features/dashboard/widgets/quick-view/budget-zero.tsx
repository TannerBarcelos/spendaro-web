import { useGetBudgets } from "@/api/budget-api/queries";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useBudgetStore } from "@/stores/budget-store";
import { GemIcon } from "lucide-react";

export default function BudgetZeroCard() {
  const selectedBudget = useBudgetStore((state) => state.active_budget);
  const { data: result } = useGetBudgets();
  const currentBudget = result?.data.find(
    (budget) => budget.id.toString() === selectedBudget
  );
  return (
    <Card className="p-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <CardHeader className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="rounded-full bg-blue-500/15 p-2">
              <GemIcon color="orange" />
            </div>
            <h3 className="text-sm font-medium text-muted-foreground">
              Budget Zero
            </h3>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {!selectedBudget ? (
          <p className="text-foreground/70 text-center font-light text-xs bg-card/60 rounded-lg p-3 w-full">
            {!result?.data?.length
              ? "No budgets found. Create a budget to track your progress towards budget zero!"
              : "Select a budget to track your progress towards budget zero!"}
          </p>
        ) : (
          <div className="mt-6">
            <BudgetStatus amount={currentBudget?.amount ?? 0} />
          </div>
        )}
      </CardContent>
    </Card>
  );
}

const BudgetStatus = ({ amount }: { amount: number }) => {
  if (amount === 0) {
    return (
      <div className="flex items-center justify-center">
        <p className="text-foreground/90 tracking-wide text-[15px]">
          You've reached budget zero!
        </p>
        <svg
          className="w-6 h-6 text-[#6E95DB]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      </div>
    );
  }
  return (
    <div className="flex items-baseline justify-between">
      <div>
        <p className="text-3xl font-bold tracking-tight">
          <span className="text-lg font-medium text-muted-foreground">$</span>
          <span className="tabular-nums">{amount}</span>
        </p>
        <p className="text-xs text-muted-foreground">
          until you meet budget zero. Keep going!
        </p>
      </div>
    </div>
  );
};
