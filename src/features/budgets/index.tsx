import { useGetBudgets } from "./_api/queries";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Edit2, MoreHorizontal, Star, StarOff, Trash2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Budget } from "./_api/index";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "@tanstack/react-router";

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
            className="hover:no-underline hover:bg-gray-200 rounded-xl"
          >
            Create Budget
          </Button>
        </Link>
      </div>
      <div className="mt-5">
        <FavoritedBudgets data={data?.data.filter((d) => d.isFavorited)} />
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
      <Table className="mt-8">
        <TableHeader>
          <TableRow>
            <TableHead>Budget Name</TableHead>
            <TableHead>Budget Description</TableHead>
            <TableHead>Budget Amount</TableHead>
            <TableHead>Created</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((budget: any) => {
            return (
              <TableRow key={budget.id}>
                <TableCell>{budget.budget_name}</TableCell>
                <TableCell>{budget.budget_description}</TableCell>
                <TableCell>${budget.amount}</TableCell>
                <TableCell>
                  {new Date(budget.createdAt).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <div className="flex flex-row items-center w-max gap-2">
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="outline"
                          className="border border-gray-200 border-solid"
                        >
                          <MoreHorizontal size={16} />
                        </Button>
                      </DropdownMenuTrigger>
                      <Button
                        variant="outline"
                        className="border border-gray-200 border-solid"
                      >
                        <Star
                          size={15}
                          strokeWidth={2}
                          className="text-primary hover:cursor-pointer"
                        />
                      </Button>
                    </div>
                    <DropdownMenuContent>
                      <DropdownMenuItem>
                        <Trash2 /> Delete Budget
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Edit2 /> Edit Budget
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
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
            <div className="bg-gray-300/20 rounded-2xl min-h-[100px] py-4 px-3 flex items-center">
              {!data || data.length === 0 ? (
                <p className="text-gray-500 flex flex-row items-center text-sm font-medium justify-center">
                  You have not favorited any budgets. Press the{" "}
                  <span className="flex flex-row items-center">
                    <Star width={10} className="mx-1" /> on any budget in the
                    list below to favorite.
                  </span>
                </p>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Budget Name</TableHead>
                      <TableHead>Budget Description</TableHead>
                      <TableHead>Budget Amount</TableHead>
                      <TableHead>Created</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {data?.map((budget: any) => {
                      return (
                        <TableRow key={budget.id}>
                          <TableCell>{budget.budget_name}</TableCell>
                          <TableCell>{budget.budget_description}</TableCell>
                          <TableCell>${budget.amount}</TableCell>
                          <TableCell>
                            {new Date(budget.createdAt).toLocaleDateString()}
                          </TableCell>
                          <TableCell>
                            <DropdownMenu>
                              <div className="flex flex-row items-center w-max gap-2">
                                <DropdownMenuTrigger asChild>
                                  <Button
                                    variant="outline"
                                    className="border border-gray-200 border-solid"
                                  >
                                    <MoreHorizontal size={16} />
                                  </Button>
                                </DropdownMenuTrigger>
                                <Button
                                  variant="outline"
                                  className="border border-gray-200 border-solid"
                                  title="Un-favorite this budget"
                                >
                                  <StarOff
                                    size={15}
                                    strokeWidth={2}
                                    className="text-primary hover:cursor-pointer"
                                  />
                                </Button>
                              </div>
                              <DropdownMenuContent>
                                <DropdownMenuItem>
                                  <Trash2 /> Delete Budget
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                  <Edit2 /> Edit Budget
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              )}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
