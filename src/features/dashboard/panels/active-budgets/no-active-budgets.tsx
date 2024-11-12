import { ToggleLeft } from "lucide-react";

function NoActiveBudgets() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] p-8 text-center">
      <div className="mb-6 relative w-48 h-48">
        <div className="absolute inset-0 dark:bg-logo opacity-[0.04] rounded-full blur-2xl"></div>
        <svg
          className="w-full h-full relative z-10"
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
            className="text-foreground/10 dark:text-logo/10"
          />
          <path
            d="M30 50 H70 M30 35 H70 M30 65 H70"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            className="text-foreground/10 dark:text-logo/40"
          />
        </svg>
        <ToggleLeft className="absolute bottom-0 -right-3 h-12 w-12 text-[#E4E4E4] dark:text-[#103777] z-20" />
      </div>
      <h2 className="text-[18px] font-medium text-foreground/70 dark:text-foreground">
        No Active Budgets
      </h2>
      <p className="text-muted-foreground/90 mb-6 max-w-sm text-sm mt-4">
        No active budgets found. Create a budget to get started!
      </p>
    </div>
  );
}

export default NoActiveBudgets;
