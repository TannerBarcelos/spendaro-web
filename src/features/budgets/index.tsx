import { useGetBudgets } from "./_api/queries/useGetBudgets";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { Budget } from "./_api/index";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "@tanstack/react-router";
import BudgetTable from "./budget-table";

export function BudgetPage() {
  const { data, isLoading, isError } = useGetBudgets();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching budgets</div>;
  }

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
        <FavoritedBudgets data={data?.data.filter((d) => d.is_favorite)} />
        <AllBudgets data={data?.data} />
      </div>
    </div>
  );
}

interface AllBudgetsProps {
  data?: Budget[];
}

function AllBudgets({ data }: AllBudgetsProps) {
  if (!data || data.length === 0) {
    return <p>No budgets found</p>;
  }
  return (
    <div className="mt-10">
      <h3 className="text-xl lg:text-xl font-semibold">All Budgets</h3>
      <BudgetTable data={data} />
    </div>
  );
}

function FavoritedBudgets({ data }: AllBudgetsProps) {
  return (
    <div className="mt-2">
      <Accordion type="single" collapsible defaultValue="favorites">
        <AccordionItem value="favorites">
          <AccordionTrigger className="max-w-fit">
            <h3 className="text-xl lg:text-xl font-semibold">Favorites</h3>
          </AccordionTrigger>
          <AccordionContent>
            <div className="bg-slate-100/40 border border-slate-200/40 rounded-2xl min-h-[100px] px-3 flex items-center">
              {!data || data.length === 0 ? (
                <p className="text-gray-500 flex flex-row items-center text-sm font-medium justify-center">
                  You have not favorited any budgets. Press the{" "}
                  <span className="flex flex-row items-center">
                    <Star width={10} className="mx-1" /> on any budget in the
                    list below to favorite.
                  </span>
                </p>
              ) : (
                <BudgetTable data={data} />
              )}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
