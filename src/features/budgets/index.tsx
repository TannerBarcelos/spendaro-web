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
import TableContainer from "@/components/table-container";

export function BudgetPage() {
  const { data, isLoading, isError } = useGetBudgets();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching budgets</div>;
  }

  const favoritedBudgets = data?.data.filter((budget) => budget.is_favorite);

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
      <div className="mt-5">
        <FavoriteBudgets budgets={favoritedBudgets} />
        <AllBudgets budgets={data?.data} />
      </div>
    </div>
  );
}

interface AllBudgetsProps {
  budgets?: Budget[];
}

function AllBudgets({ budgets }: AllBudgetsProps) {
  return (
    <>
      <h2 className="font-medium my-4 mt-8">All Budgets</h2>
      {budgets && budgets.length > 0 ? (
        <BudgetTable budgets={budgets} />
      ) : (
        <NoBudgetsFound />
      )}
    </>
  );
}

function FavoriteBudgets({ budgets }: AllBudgetsProps) {
  return (
    <div className="mt-2">
      <Accordion type="single" collapsible defaultValue="favorites">
        <AccordionItem value="favorites">
          <AccordionTrigger className="max-w-fit">
            <h2>Favorited Budgets</h2>
          </AccordionTrigger>
          <AccordionContent>
            {budgets && budgets.length > 0 ? (
              <BudgetTable budgets={budgets} />
            ) : (
              <NoFavoritesFound />
            )}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

function NoBudgetsFound() {
  return (
    <div className="p-8 mt-4 text-center text-gray-700 bg-slate-100/40 border border-slate-200/40 rounded-2xl">
      <p className="text-lg">Currently, you have no budgets.</p>
      <p className="text-sm pt-4">
        Click the Create Budget button above to begin creating a budget.
      </p>
    </div>
  );
}

function NoFavoritesFound() {
  return (
    <p className="text-gray-500 flex flex-row items-center text-sm font-medium justify-center">
      You have not favorited any budgets. Select the menu icon on any budget to
      add it to your favorites.
    </p>
  );
}
