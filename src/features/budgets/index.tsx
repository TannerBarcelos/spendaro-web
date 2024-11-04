import { useGetBudgets } from "./_api/queries/useGetBudgets";
import { Button } from "@/components/ui/button";
import { Budget } from "./_api/index";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "@tanstack/react-router";
import BudgetTable from "./budget-table";
import { EmptyBudgetState } from "@/components/empty-budget-state";

type TBudgets = {
  budgets?: Budget[];
};

export function BudgetPage() {
  const { data, isLoading, isError } = useGetBudgets();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching budgets</div>;
  }

  const budgets = data?.data;
  const favoriteBudgets = budgets?.filter((budget) => budget.is_favorite);

  return (
    <div>
      <div className="w-full flex flex-row items-center justify-between">
        <h1 className="text-xl lg:text-2xl font-semibold">Budget List</h1>
        <Link to="/budgeting/new">
          <Button
            variant="link"
            className="hover:no-underline hover:bg-gray-100 hover:text-primary/80 rounded-xl"
          >
            Create Budget
          </Button>
        </Link>
      </div>
      {!budgets || budgets.length === 0 ? (
        <EmptyBudgetState />
      ) : (
        <div className="mt-5">
          {favoriteBudgets && favoriteBudgets.length > 0 && (
            <Accordion
              type="single"
              collapsible
              defaultValue="favorites"
              className="mt-2"
            >
              <AccordionItem value="favorites">
                <AccordionTrigger className="max-w-fit">
                  <h2>Favorited Budgets</h2>
                </AccordionTrigger>
                <AccordionContent>
                  <BudgetTable budgets={favoriteBudgets || []} />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          )}

          <>
            {(favoriteBudgets?.length ?? 0) > 0 && (
              <h2 className="font-medium my-4 mt-8">All Budgets</h2>
            )}
            <BudgetTable budgets={budgets || []} />
          </>
        </div>
      )}
    </div>
  );
}
