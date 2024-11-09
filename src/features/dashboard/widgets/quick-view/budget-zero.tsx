import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function BudgetZeroCard() {
  const [selectedBudget, setSelectedBudget] = React.useState("family");

  const budgetData = {
    family: { amount: 10, progress: 98 },
    personal: { amount: 25, progress: 75 },
    savings: { amount: 0, progress: 100 },
  };

  const currentBudget = budgetData[selectedBudget as keyof typeof budgetData];

  return (
    <Card className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <CardHeader className="flex flex-row items-center justify-between">
        <h3 className="text-sm font-medium text-muted-foreground">
          Budget Zero
        </h3>
        <Select value={selectedBudget} onValueChange={setSelectedBudget}>
          <SelectTrigger className="w-[180px] rounded-xl text-foreground/90 translate-x-2">
            <SelectValue placeholder="Select budget" />
          </SelectTrigger>
          <SelectContent className="text-foreground/90">
            <SelectItem value="family">Family Budget</SelectItem>
            <SelectItem value="personal">Personal Budget</SelectItem>
            <SelectItem value="savings">Savings Budget</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="p-0 mt-4">
        <div className="flex justify-between items-center">
          {currentBudget.amount === 0 ? (
            <div className="flex items-center space-x-2">
              <p className="text-md tracking-tight font-normal text-foreground/90 my-2">
                Congrats! You've reached your goal!
              </p>
              <svg
                className="w-8 h-8 text-[#6E95DB]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            </div>
          ) : (
            <p className="text-md tracking-tight font-normal text-foreground/90 my-2">
              ${currentBudget.amount} to go! Keep up the great work!
            </p>
          )}
        </div>
        <div className="mt-4 space-y-2">
          <div className="flex items-center justify-between text-sm">
            <p className="text-foreground text-xs">
              {currentBudget.progress}% until goal
            </p>
          </div>
          <div className="h-2 rounded-full bg-primary/20">
            <div
              className="h-full rounded-full bg-secondary/70 transition-all duration-300 ease-in-out"
              style={{ width: `${currentBudget.progress}%` }}
              role="progressbar"
              aria-valuenow={currentBudget.progress}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
