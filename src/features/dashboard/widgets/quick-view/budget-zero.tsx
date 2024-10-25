import { BicepsFlexed, PartyPopper } from "lucide-react";
import React from "react";

const iconConfig = {
  width: 30,
  height: 30,
  className: "text-gray-700/70",
};

function BudgetZero() {
  const currentBalance = 10;
  const budgetZero = 0;
  const hasMetBudgetZero = currentBalance - budgetZero === 0;
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      {hasMetBudgetZero ? (
        <DisplayBudgetZero
          message="Congrats you've met budget zero!"
          icon={<PartyPopper {...iconConfig} />}
        />
      ) : (
        <DisplayBudgetZero
          message={`$${currentBalance} to go! Keep up the great work!`}
          icon={<BicepsFlexed {...iconConfig} />}
        />
      )}
    </div>
  );
}

function DisplayBudgetZero({
  message,
  icon,
}: {
  message: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex items-center w-full justify-center gap-x-4">
      <p className="text-medium font-medium text-gray-700">{message}</p>
      {icon}
    </div>
  );
}

export default BudgetZero;
