import { greetTimeOfDay } from "@/lib/utils";
import { UnassignedBalanceWidget } from "./widgets/unassigned-balance";
import { LatestTransactions } from "./widgets/latest-transactions";
import { ActiveBudgetsWidget } from "./widgets/active-budgets";
import { FavoriteCategoriesWidget } from "./widgets/favorite-categories";
import { PerformanceWidget } from "./widgets/performance";

export function DashboardPage() {
  return (
    <div className="min-h-screen flex flex-col mx-4 lg:mx-0">
      <h1 className="my-4 text-xl lg:text-2xl font-semibold">
        {greetTimeOfDay()}
      </h1>
      <div className="flex-grow grid grid-cols-1 lg:grid-cols-4 grid-rows-4 lg:gap-6 mb-6">
        <LatestTransactions />
        <div className="col-span-3 row-span-1 grid lg:grid-cols-3 grid-cols-1 gap-6">
          <UnassignedBalanceWidget />
          <ActiveBudgetsWidget />
          <FavoriteCategoriesWidget />
        </div>
        <div className="bg-white rounded-2xl col-span-3 row-span-3">
          <PerformanceWidget />
        </div>
      </div>
    </div>
  );
}
