import { Loader2 } from "lucide-react";

export function LoadingBudgetState() {
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
            d="M50 15 L50 50 L75 50"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            className="text-primary "
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="0 50 50"
              to="360 50 50"
              dur="2s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
        <Loader2 className="absolute bottom-0 right-0 h-12 w-12 text-primary  animate-spin" />
      </div>
      <h2 className="text-2xl font-semibold mb-3">Loading your budgets</h2>
      <p className="text-muted-foreground mb-6 max-w-sm">
        Please wait while we fetch your latest budget data.
      </p>
    </div>
  );
}
