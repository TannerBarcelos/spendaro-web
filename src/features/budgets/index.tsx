import { useGetBudgets } from "./_api/queries/useGetBudgets";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRightFromCircleIcon,
  Edit2,
  MoreHorizontal,
  Star,
  StarIcon,
  StarOff,
  Trash2,
} from "lucide-react";
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
import { Link, useNavigate } from "@tanstack/react-router";
import { useUpdateBudget } from "./_api/mutations/useUpdateBudget";
import { toast } from "sonner";

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
  const updateBudget = useUpdateBudget();

  const navigate = useNavigate();

  if (!data || data.length === 0) {
    return <p>No budgets found</p>;
  }

  const handleUpdateFavorite = async (budget_id: number, favorite: boolean) => {
    const updated_budget = await updateBudget.mutateAsync({
      budget_id: budget_id.toString(),
      budget_to_update: { isFavorited: favorite },
    });
    toast.success(`Added ${updated_budget.budget_name} budget to favorites`);
  };

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
          {data?.map((budget: Budget) => {
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
                          variant="ghost"
                          className="hover:bg-slate-200/50"
                        >
                          <MoreHorizontal size={16} />
                        </Button>
                      </DropdownMenuTrigger>
                    </div>
                    <DropdownMenuContent>
                      <DropdownMenuItem
                        onClick={() => {
                          navigate({
                            to: `/budgeting/${budget.id}`,
                          });
                        }}
                      >
                        <ArrowUpRightFromCircleIcon /> View Budget
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        disabled={budget.isFavorited}
                        onClick={() => handleUpdateFavorite(budget.id, true)}
                      >
                        <StarIcon /> Add to favorites
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Edit2 /> Edit budget
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Trash2 /> Delete budget
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
  const navigate = useNavigate();
  const updateBudget = useUpdateBudget();
  const handleUpdateFavorite = async (budget_id: number, favorite: boolean) => {
    const updated_budget = await updateBudget.mutateAsync({
      budget_id: budget_id.toString(),
      budget_to_update: { isFavorited: favorite },
    });
    toast.success(
      `Removed ${updated_budget.budget_name} budget from favorites`
    );
  };
  return (
    <div className="mt-2">
      <Accordion type="single" collapsible defaultValue="favorites">
        <AccordionItem value="favorites">
          <AccordionTrigger className="max-w-fit">
            <h3 className="text-xl lg:text-xl font-semibold">Favorites</h3>
          </AccordionTrigger>
          <AccordionContent>
            <div className="bg-slate-100/40 border border-slate-200/40 rounded-2xl min-h-[100px] py-4 px-3 flex items-center">
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
                    {data?.map((budget: Budget) => {
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
                              </div>
                              <DropdownMenuContent>
                                <DropdownMenuItem
                                  onClick={() => {
                                    navigate({
                                      to: `/budgeting/${budget.id}`, // go to budget overview page
                                    });
                                  }}
                                >
                                  <ArrowUpRightFromCircleIcon /> View Budget
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem
                                  onClick={() =>
                                    handleUpdateFavorite(budget.id, false)
                                  }
                                >
                                  <StarOff /> Remove from favorites
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Edit2 /> Edit budget
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Trash2 /> Delete budget
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
