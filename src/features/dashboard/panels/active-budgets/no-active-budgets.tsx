import { ToggleLeft } from "lucide-react";

function NoActiveBudgets() {
  console.log("runnng");
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] p-8 text-center">
      <div className="mb-6 relative w-48 h-48">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="currentColor"
            strokeWidth="2"
            className="text-muted"
          />
          <path
            d="M30 50 H70 M30 35 H70 M30 65 H70"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            className="text-primary"
          />
        </svg>
        <ToggleLeft className="absolute bottom-0 right-0 h-12 w-12 text-primary" />
      </div>
      <h2 className="text-[18px] font-medium text-foreground/70">
        No Active Budgets
      </h2>
      <p className="text-muted-foreground/90 mb-6 max-w-sm text-sm mt-4">
        No active budgets found. Create a budget to get started!
      </p>
    </div>
  );
}

export default NoActiveBudgets;
