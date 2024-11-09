import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BudgetZero from "./budget-zero";
import {
  CircleArrowOutDownLeft,
  CircleArrowOutUpRight,
  DollarSign,
  TrendingUp,
} from "lucide-react";

import QuickViewBox from "./box";

const iconConfig = {
  width: 17,
  height: 17,
};

export function QuickViewWidget() {
  return (
    <Card className="p-3 lg:col-span-2">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-base lg:text-md font-medium text-foreground">
          Today&apos;s Overview
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0 h-[90%] mt-4 grid grid-cols-2 grid-rows-2 gap-2">
        <TodayCard
          dollar_amount={120.4}
          title="Todays Spend"
          icon={<DollarSign {...iconConfig} className="text-logo lg:size-6" />}
        />
        <BudgetZero />
        <TodayCard
          dollar_amount={890.4}
          title="Todays Income"
          icon={
            <CircleArrowOutDownLeft
              {...iconConfig}
              className="text-green-500 lg:size-6"
            />
          }
        />
        <TodayCard
          dollar_amount={120.4}
          title="Todays Outcome"
          icon={
            <CircleArrowOutUpRight
              {...iconConfig}
              className="text-red-300 lg:size-6"
            />
          }
        />
      </CardContent>
    </Card>
  );
}

function TodayCard({
  title,
  dollar_amount,
  icon,
}: {
  title: string;
  dollar_amount: number;
  icon: React.ReactNode;
}) {
  return (
    <Card className="p-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <CardHeader className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="rounded-full bg-blue-500/15 p-2">{icon}</div>
            <h3 className="text-sm font-medium text-muted-foreground">
              {title}
            </h3>
          </div>
          <div className="flex items-center space-x-1 rounded-full bg-green-500/15 px-2 py-0.5 text-xs font-medium text-green-500">
            <TrendingUp className="h-3.5 w-3.5" />
            <span>+12%</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mt-6 space-y-1">
          <div className="flex items-baseline justify-between">
            <div className="space-y-1">
              <p className="text-3xl font-bold tracking-tight">
                <span className="text-lg font-medium text-muted-foreground">
                  $
                </span>
                <span className="tabular-nums">{dollar_amount}</span>
                <span className="text-lg font-medium text-muted-foreground">
                  .40
                </span>
              </p>
              <p className="text-xs text-muted-foreground">
                from <span className="font-medium text-foreground">$98.20</span>{" "}
                yesterday
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default QuickViewBox;
