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

export function QuickViewWidget() {
  return (
    <Card className="p-3">
      <CardContent className="p-0 h-full">
        <div className="grid grid-cols-2 grid-rows-2 gap-2 h-full">
          <QuickViewBox
            title="Today"
            icon={<BadgeDollarSign width={20} height={20} />}
          >
            <Today />
          </QuickViewBox>
          <QuickViewBox
            title="Budget Zero"
            icon={<PiggyBank width={20} height={20} />}
          >
            <BudgetZero />
          </QuickViewBox>
          <QuickViewBox
            title="Spent This Month"
            icon={<CalendarClock width={20} height={20} />}
          >
            <Spend />
          </QuickViewBox>
          <QuickViewBox
            title="This Months Income"
            icon={<Landmark width={20} height={20} />}
          >
            <Income />
          </QuickViewBox>
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
