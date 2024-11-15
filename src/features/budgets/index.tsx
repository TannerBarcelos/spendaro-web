import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "@tanstack/react-router";
import BudgetTable from "./_components/budget-table";
import { EmptyBudgetState } from "@/features/budgets/_components/fallbacks/empty-budget-state";
import { ErrorBudgetState } from "@/features/budgets/_components/fallbacks/error-budget-state";
import { Budget } from "@/api/budget-api/types";
import { LoadingBudgetState } from "@/features/budgets/_components/fallbacks/loading-budget-state";
import { useGetBudgets } from "@/api/budget-api/queries";
import PageHeader from "@/components/page-header";

export function Page() {
  const { data, isLoading, isError, refetch } = useGetBudgets();
  if (isLoading) return <LoadingBudgetState />;
  if (isError) return <ErrorBudgetState onRetry={refetch} />;
  if (!data || data.data.length < 1) return <EmptyBudgetState />;
  return <Budgets budgets={data.data} />;
}

function Budgets({ budgets }: { budgets: Budget[] }) {
  const favoriteBudgets = budgets.filter((budget) => budget.is_favorite);
  const archivedBudgets = budgets.filter((budget) => !budget.is_active);
  return (
    <div>
      <PageHeader text="Budget List">
        <Link to="/budgeting/new">
          <Button className="light:hover:bg-gray-100 text-[13px]">
            create budget
          </Button>
        </Link>
      </PageHeader>
      {!budgets || budgets.length === 0 ? (
        <EmptyBudgetState />
      ) : (
        <div className="space-y-8">
          {(favoriteBudgets.length ?? 0) > 0 && (
            <div>
              <h2 className="font-medium text-sm my-4">Active Budgets</h2>
              <BudgetTable budgets={budgets} />
            </div>
          )}
          {favoriteBudgets && favoriteBudgets.length > 0 && (
            <Accordion
              type="single"
              collapsible
              defaultValue="favorites"
              className="mt-2"
            >
              <AccordionItem value="favorites">
                <AccordionTrigger className="max-w-fit">
                  <h2 className="text-sm">Favorited Budgets</h2>
                </AccordionTrigger>
                <AccordionContent>
                  <BudgetTable budgets={favoriteBudgets} />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          )}
          {archivedBudgets && archivedBudgets.length > 0 && (
            <Accordion
              type="single"
              collapsible
              defaultValue="favorites"
              className="mt-2"
            >
              <AccordionItem value="favorites">
                <AccordionTrigger className="max-w-fit">
                  <h2 className="text-sm">Archived Budgets</h2>
                </AccordionTrigger>
                <AccordionContent>
                  <BudgetTable budgets={archivedBudgets} />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          )}
        </div>
      )}
    </div>
  );
}
