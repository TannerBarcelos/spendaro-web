import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import BudgetTable from "./_components/budget-table";
import { EmptyBudgetState } from "@/features/budgets/_components/fallbacks/empty-budget-state";
import { ErrorBudgetState } from "@/features/budgets/_components/fallbacks/error-budget-state";
import { Budget } from "@/api/budget-api/types";
import { LoadingBudgetState } from "@/features/budgets/_components/fallbacks/loading-budget-state";
import { useGetBudgets } from "@/api/budget-api/queries";
import PageHeader from "@/components/page-header";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CreateBudgetForm from "./_components/budget-form";
import { Route as BudgetRoute } from "@/routes/(app)/_app/budgeting";

export function Page() {
  const { data, isLoading, isError, refetch } = useGetBudgets();
  if (isLoading) return <LoadingBudgetState />;
  if (isError) return <ErrorBudgetState onRetry={refetch} />;
  if (!data) return <EmptyBudgetState />;
  return <Budgets budgets={data.data} />;
}

function Budgets({ budgets }: { budgets: Budget[] }) {
  // Since budget creation happens within the same page, we can use a search param to determine if the create dialog should be open or not
  // when navigating here from the 'create budget' button in the sidebar nav
  const auto_open_create = BudgetRoute.useSearch({
    select: (search) => search.create,
  });

  const active_budgets = budgets.filter((budget) => budget.is_active);

  const favoriteBudgets = budgets.filter(
    (budget) => budget.is_favorite && budget.is_active
  );
  const archivedBudgets = budgets.filter((budget) => !budget.is_active);

  return (
    <div>
      <PageHeader text={budgets.length > 0 ? "Budget List" : ""}>
        <Dialog defaultOpen={auto_open_create}>
          {budgets.length > 0 && (
            <DialogTrigger>
              <Button className="light:hover:bg-gray-100 text-[13px]">
                create budget
              </Button>
            </DialogTrigger>
          )}
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="mb-4">Create a new budget</DialogTitle>
              <DialogDescription className="border border-foreground/5 justify-between flex items-center bg-card p-4 text-xs rounded-xl">
                Create a new budget to start tracking your expenses and income
                and be one step closer to financial freedom!
              </DialogDescription>
            </DialogHeader>
            <CreateBudgetForm />
          </DialogContent>
        </Dialog>
      </PageHeader>
      {!budgets || budgets.length === 0 ? (
        <EmptyBudgetState />
      ) : (
        <div className="space-y-8">
          <div>
            <h2 className="font-medium text-sm my-4">Active Budgets</h2>
            <BudgetTable budgets={active_budgets} />
          </div>
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
