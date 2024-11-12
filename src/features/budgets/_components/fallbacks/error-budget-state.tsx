import { AlertTriangle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ErrorBudgetState({ onRetry }: { onRetry: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] p-8 text-center md:mt-20">
      <div className="mb-6 relative w-48 h-48">
        <svg
          className="w-full h-full"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="100"
            cy="100"
            r="90"
            stroke="currentColor"
            strokeWidth="4"
            className="text-muted"
          />
          <path
            d="M100 30 L100 100 L150 100"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            className="text-primary  animate-spin-slow origin-center"
          />
          <path
            d="M110 80 L90 120 M90 80 L110 120"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            className="text-destructive"
          />
          <circle
            cx="100"
            cy="150"
            r="4"
            fill="currentColor"
            className="text-destructive"
          />
        </svg>
        <AlertTriangle className="absolute bottom-0 right-0 h-12 w-12 text-destructive animate-bounce" />
      </div>
      <h2 className="text-2xl font-semibold mb-3">
        Oops! Something went wrong
      </h2>
      <p className="text-muted-foreground mb-6 max-w-sm">
        We encountered an error while loading your budget data. Please try again
        or contact support if the problem persists.
      </p>
      <Button onClick={onRetry} className="hover:bg-primary/10">
        <RefreshCw className="mr-2 h-5 w-5" />
        Retry
      </Button>
    </div>
  );
}
