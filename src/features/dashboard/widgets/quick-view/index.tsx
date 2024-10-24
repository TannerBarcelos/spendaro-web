import { Card, CardContent } from "@/components/ui/card";
import BudgetZero from "./budget-zero";
import Spend from "./spend";
import Income from "./income";
import Today from "./today";
import {
  BadgeDollarSign,
  CalendarClock,
  Landmark,
  PiggyBank,
} from "lucide-react";

const iconConfig = {
  width: 20,
  height: 20,
};

const boxes = [
  {
    title: "Today",
    icon: <BadgeDollarSign {...iconConfig} />,
    component: <Today />,
  },
  {
    title: "Budget Zero",
    icon: <PiggyBank {...iconConfig} />,
    component: <BudgetZero />,
  },
  {
    title: "Spent This Month",
    icon: <CalendarClock {...iconConfig} />,
    component: <Spend />,
  },
  {
    title: "This Months Income",
    icon: <Landmark {...iconConfig} />,
    component: <Income />,
  },
];

export function QuickViewWidget() {
  return (
    <Card className="p-3 lg:col-span-2">
      <CardContent className="p-0 h-full">
        <div className="grid grid-cols-2 grid-rows-2 gap-2 h-full">
          {boxes.map((box, index) => (
            <QuickViewBox key={index} title={box.title} icon={box.icon}>
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
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-slate-100 rounded-xl flex flex-col p-3">
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
