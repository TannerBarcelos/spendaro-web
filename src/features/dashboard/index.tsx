import { UnassignedBalanceWidget } from "./widgets/unassigned-balance";
import { LatestTransactionsWidget } from "./widgets/latest-transactions";
import { ActiveBudgetsWidget } from "./widgets/active-budgets";
import { PerformanceWidget } from "./widgets/performance";
import Page from "@/components/Page";
import TopGreetingBar from "./_components/TopGreetingBar";

export function DashboardPage() {
  return (
    <Page>
      <TopGreetingBar />
      <div className="flex-grow grid grid-cols-1 lg:grid-cols-4 grid-rows-4 lg:gap-6 mb-6">
        <LatestTransactionsWidget />
        <div className="grid grid-cols-1 row-span-1 col-span-3 gap-6 my-6 lg:grid-cols-2 lg:my-0">
          <UnassignedBalanceWidget />
          <ActiveBudgetsWidget />
        </div>
        <PerformanceWidget />
      </div>
    </Page>
  );
}
