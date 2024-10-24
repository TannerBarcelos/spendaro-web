import { Card, CardContent } from "@/components/ui/card";
import BudgetZero from "./budget-zero";
import Spend from "./spend";
import Income from "./income";
import Today from "./today";

export function QuickViewWidget() {
  return (
    <Card className="p-3">
      <CardContent className="p-0 h-full">
        <div className="grid grid-cols-2 grid-rows-2 gap-2 h-full">
          <Today />
          <BudgetZero />
          <Spend />
          <Income />
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
        <h1 className="text-sm font-medium text-slate-900">{title}</h1>
        <span className="bg-slate-200 w-8 h-8 flex items-center justify-center rounded-full text-primary">
          {icon}
        </span>
      </div>
      {children}
    </div>
  );
}
export default QuickViewBox;
