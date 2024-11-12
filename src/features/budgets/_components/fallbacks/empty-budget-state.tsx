import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

export function EmptyBudgetState() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] p-8 text-center mt-10">
      <CardStack />
      <h2 className="text-2xl font-semibold mb-3">No budgets</h2>
      <p className="text-muted-foreground mb-6 max-w-sm">
        Add your first budget by clicking below to start tracking your expenses.
      </p>
      <Link to="/budgeting/new">
        <Button>
          <Plus className="mr-2 h-5 w-5" />
          Create budget
        </Button>
      </Link>
    </div>
  );
}

// This is a helper component that creates a stack of cards - generated via v0 -> https://v0.dev/chat/PnXo03hsLTz
function CardStack() {
  return (
    <div className="mb-6 relative">
      <div className="w-48 space-y-4">
        <div className="border h-24 bg-muted/40 dark:bg-card/60 rounded-lg shadow-sm transform -rotate-6 relative">
          <div className="absolute inset-4">
            <div className="h-3 w-3/4 bg-card rounded" />
            <div className="h-2 w-1/2 bg-card rounded mt-2" />
          </div>
        </div>
        <div className="border h-24 bg-muted/30 dark:bg-card/40 rounded-lg shadow-sm transform rotate-3 relative">
          <div className="absolute inset-4">
            <div className="h-3 w-3/4 bg-muted rounded" />
            <div className="h-2 w-1/2 bg-muted rounded mt-2" />
          </div>
        </div>
        <div className="border h-24 dark:bg-card/20 rounded-lg shadow-sm relative">
          <div className="absolute inset-4">
            <div className="h-3 w-3/4 bg-muted rounded" />
            <div className="h-2 w-1/2 bg-muted rounded mt-2" />
          </div>
        </div>
      </div>
    </div>
  );
}
