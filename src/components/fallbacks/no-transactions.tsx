import { Link } from "@tanstack/react-router";
import { PlusCircle } from "lucide-react";

type EmptyTransactionsStateProps = {
  showAddButton: boolean;
};

function EmptyTransactionsState({
  showAddButton,
}: EmptyTransactionsStateProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] p-8 text-center mt-4">
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
            className="text-foreground/10 dark:text-logo/10"
          />
          <path
            d="M35 50 L65 50 M50 35 L50 65"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="text-foreground/10 dark:text-logo/40"
          />
        </svg>
        <PlusCircle className="absolute bottom-0 -right-3 h-12 w-12 text-[#E4E4E4] dark:text-[#103777]" />
      </div>
      <h2
        className={`text-2xl mb-3 ${showAddButton ? "font-semibold text-foreground" : "font-medium text-foreground/70 text-[18px] dark:text-foreground"}`}
      >
        No Transactions Yet
      </h2>
      <p
        className={`text-muted-foreground/90 mb-6 max-w-sm ${showAddButton ? "text-muted-foreground mb-6 max-w-sm" : "text-sm"}`}
      >
        You currently have no transactions saved. Add a transaction and you will
        see it here!
      </p>
      {showAddButton && (
        <Link
          to="/transactions/new"
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 inline-flex items-center"
        >
          <PlusCircle className="mr-2 h-5 w-5" />
          Add Transaction
        </Link>
      )}
    </div>
  );
}

export default EmptyTransactionsState;
