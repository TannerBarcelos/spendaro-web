import { Card, CardContent } from "@/components/ui/card";
import BudgetZero from "./budget-zero";
import {
  BadgeDollarSign,
  CircleArrowOutDownLeft,
  CircleArrowOutUpRight,
  PiggyBank,
} from "lucide-react";

import QuickViewBox from "./Box";

const iconConfig = {
  width: 17,
  height: 17,
};

const cards = [
  {
    title: "Today's Spend",
    icon: <BadgeDollarSign {...iconConfig} className="text-logo lg:size-6" />,
    component: <QuickViewBox dollar_amount={120.4} />,
  },
  {
    title: "Today's Income",
    icon: (
      <CircleArrowOutDownLeft
        {...iconConfig}
        className="text-green-500 lg:size-6"
      />
    ),
    component: <QuickViewBox dollar_amount={890.4} />,
  },
  {
    title: "Outgoing",
    icon: (
      <CircleArrowOutUpRight
        {...iconConfig}
        className="text-red-300 lg:size-6"
      />
    ),
    component: <QuickViewBox dollar_amount={120.4} />,
  },
  {
    title: "Budget Zero",
    icon: <PiggyBank {...iconConfig} className="text-purple-500 lg:size-6" />,
    component: <BudgetZero />,
  },
];

export function QuickViewWidget() {
  return (
    <Card className="p-3 lg:col-span-2">
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
        <span className="dark:bg-transparent bg-slate-200 w-8 h-8 flex items-center justify-center rounded-full text-primary">
          {icon}
        </span>
      </div>
      {children}
    </Card>
  );
}
export default QuickViewBox;
