import { useState } from "react";
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

export default function BudgetZeroCard() {
  const { data, isLoading } = useGetBudgets();
  const [selectedBudget, setSelectedBudget] = useState(
    data?.data[0].budget_name
  );

  const currentBudget = data?.data.find(
    (budget) => budget.budget_name === selectedBudget
  );

  return (
    <Card className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <CardHeader className="flex flex-row items-center justify-between p-4">
        <h3 className="text-sm font-medium text-muted-foreground">
          Budget Zero
        </h3>
        <Select value={selectedBudget} onValueChange={setSelectedBudget}>
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
            {data?.data.map((budget) => (
              <SelectItem key={budget.id} value={budget.budget_name}>
                {budget.budget_name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <div>
          {selectedBudget ? (
            <div className="mt-6">
              {currentBudget?.amount === 0 ? (
                <div className="flex items-center justify-center space-x-2">
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
              ) : (
                <div className="space-y-1">
                  <div className="flex items-baseline justify-between">
                    <div className="space-y-1">
                      <p className="text-3xl font-bold tracking-tight">
                        <span className="text-lg font-medium text-muted-foreground">
                          $
                        </span>
                        <span className="tabular-nums">
                          {currentBudget?.amount}
                        </span>
                      </p>
                      <p className="text-xs text-muted-foreground">
                        unitl you meet budget zero. Keep going!
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <p className="text-foreground/70 text-center font-light text-xs bg-card/60 rounded-lg p-4 w-full">
              Select a budget to track your progress towards budget zero!
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
