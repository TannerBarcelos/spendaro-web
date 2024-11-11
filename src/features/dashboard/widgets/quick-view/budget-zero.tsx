import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useGetBudgets } from "@/api/budget-api/queries";
import { Skeleton } from "@/components/ui/skeleton";
import { Budget } from "@/api/budget-api/types";

export default function BudgetZeroCard() {
  const { data, isLoading } = useGetBudgets();
  const [selectedBudget, setSelectedBudget] = useState<string | undefined>();

  // Set the first budget as the selected budget
  useEffect(() => {
    if (data?.data?.[0]) {
      setSelectedBudget(data.data[0].budget_name);
    }
  }, [data]);

  const currentBudget = data?.data?.find(
    (budget) => budget.budget_name === selectedBudget
  );

  return (
    <Card className="p-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <CardHeader className="flex flex-row items-center justify-between p-4">
        <h3 className="text-sm font-medium text-muted-foreground">
          Budget Zero
        </h3>
        <BudgetSelector
          budgets={data?.data ?? []}
          selectedBudget={selectedBudget}
          onBudgetChange={setSelectedBudget}
          isLoading={isLoading}
        />
      </CardHeader>
      <CardContent>
        {!selectedBudget ? (
          <p className="text-foreground/70 text-center font-light text-xs bg-card/60 rounded-lg p-3 w-full">
            {!data?.data?.length
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

const BudgetSelector = ({
  budgets,
  selectedBudget,
  onBudgetChange,
  isLoading,
}: {
  budgets: Budget[];
  selectedBudget: string | undefined;
  onBudgetChange: (value: string) => void;
  isLoading: boolean;
}) => (
  <Select
    value={selectedBudget}
    onValueChange={onBudgetChange}
    disabled={budgets.length < 1}
  >
    <SelectTrigger
      className="w-[180px] rounded-xl text-foreground/90 translate-x-2"
      disabled={isLoading}
    >
      {isLoading ? (
        <Skeleton className="w-full h-[20px] rounded-full" />
      ) : (
        <SelectValue placeholder="Select budget" />
      )}
    </SelectTrigger>
    <SelectContent className="text-foreground/90">
      {budgets.map((budget) => (
        <SelectItem key={budget.id} value={budget.budget_name}>
          {budget.budget_name}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
);
