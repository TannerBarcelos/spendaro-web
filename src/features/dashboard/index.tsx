import { QuickViewWidget } from "./widgets/quick-view";
import { LatestTransactionsWidget } from "./widgets/latest-transactions";
import { ActiveBudgetsWidget } from "./widgets/active-budgets";
import { ReportingWidget } from "./widgets/reporting";
import TopGreetingBar from "./_components/TopGreetingBar";

export function DashboardPage() {
  return (
    <>
      <TopGreetingBar />
      <div className="flex-grow grid grid-cols-1 lg:grid-cols-4 grid-rows-4 lg:gap-6 mb-6">
        <LatestTransactionsWidget />
        <div className="grid grid-cols-1 row-span-2 col-span-3 gap-6 my-6 lg:grid-cols-3 lg:my-0">
          <QuickViewWidget />
          <ActiveBudgetsWidget />
        </div>
        <ReportingWidget />
      </div>
    </>
  );
}
