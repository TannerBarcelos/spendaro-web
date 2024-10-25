import { Card, CardContent } from "@/components/ui/card";
import BudgetZero from "./budget-zero";
import Spend from "./spend";
import Income from "./income";
import Today from "./today";
import {
  BadgeDollarSign,
  CircleArrowOutDownLeft,
  CircleArrowOutUpRight,
  PiggyBank,
} from "lucide-react";

const iconConfig = {
  width: 17,
  height: 17,
};

const boxes = [
  {
    title: "Today's Spend",
    icon: <BadgeDollarSign {...iconConfig} />,
    component: <Today />,
    cardColor: "bg-purple-50",
  },
  {
    title: "Today's Income",
    icon: <CircleArrowOutDownLeft {...iconConfig} className="text-green-500" />,
    component: <Income />,
    cardColor: "bg-green-50",
  },
  {
    title: "Outgoing",
    icon: <CircleArrowOutUpRight {...iconConfig} className="text-red-300" />,
    component: <Spend />,
    cardColor: "bg-red-50",
  },
  {
    title: "Budget Zero",
    icon: <PiggyBank {...iconConfig} className="text-purple-500" />,
    component: <BudgetZero />,
    cardColor: "bg-blue-50",
  },
];

export function QuickViewWidget() {
  return (
    <Card className="p-3 lg:col-span-2">
      <CardContent className="p-0 h-full">
        <div className="grid grid-cols-2 grid-rows-2 gap-2 h-full">
          {boxes.map((box, index) => (
            <QuickViewBox
              key={index}
              title={box.title}
              icon={box.icon}
              cardColor={box.cardColor}
            >
              {box.component}
            </QuickViewBox>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export function QuickViewBox({
  title,
  icon,
  children,
  cardColor,
}: {
  title: string;
  icon: React.ReactNode;
  cardColor: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`bg-slate-100 rounded-xl flex flex-col px-3 pt-2 ${cardColor}`}
    >
      <div className="flex items-center justify-between">
        <h1 className="text-base font-medium text-slate-900">{title}</h1>
        <span className="bg-slate-200 w-8 h-8 flex items-center justify-center rounded-full text-primary">
          {icon}
        </span>
      </div>
      {children}
    </div>
  );
}
export default QuickViewBox;
