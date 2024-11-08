import { Card, CardContent, CardTitle } from "@/components/ui/card";
import BudgetZero from "./budget-zero";
import {
  BadgeDollarSign,
  CircleArrowOutDownLeft,
  CircleArrowOutUpRight,
  PiggyBank,
} from "lucide-react";

import QuickViewBox from "./box";

const iconConfig = {
  width: 17,
  height: 17,
};

const cards = [
  {
    title: "Spend",
    icon: <BadgeDollarSign {...iconConfig} className="text-logo lg:size-6" />,
    component: <QuickViewBox dollar_amount={120.4} />,
  },
  {
    title: "Budget Zero",
    icon: <PiggyBank {...iconConfig} className="text-purple-500 lg:size-6" />,
    component: <BudgetZero />,
  },
  {
    title: "Income",
    icon: (
      <CircleArrowOutDownLeft
        {...iconConfig}
        className="text-green-500 lg:size-6"
      />
    ),
    component: <QuickViewBox dollar_amount={890.4} />,
  },
  {
    title: "Outcome",
    icon: (
      <CircleArrowOutUpRight
        {...iconConfig}
        className="text-red-300 lg:size-6"
      />
    ),
    component: <QuickViewBox dollar_amount={120.4} />,
  },
];

export function QuickViewWidget() {
  return (
    <Card className="p-3 lg:col-span-2">
      <CardTitle className="flex flex-row items-center justify-between">
        <h2 className="text-base lg:text-md font-medium text-foreground">
          Today
        </h2>
      </CardTitle>
      <CardContent className="p-0 h-full">
        <div className="grid grid-cols-2 grid-rows-2 gap-2 h-full">
          {cards.map((card, index) => (
            <QuickViewCard key={index} title={card.title} icon={card.icon}>
              {card.component}
            </QuickViewCard>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export function QuickViewCard({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <Card className={`rounded-xl flex flex-col px-3 pt-2`}>
      <div className="flex items-center justify-between">
        <h1 className="text-base font-medium text-foreground">{title}</h1>
        <span className="dark:bg-transparent size-8 flex items-center justify-center rounded-full text-primary">
          {icon}
        </span>
      </div>
      {children}
    </Card>
  );
}
export default QuickViewBox;
