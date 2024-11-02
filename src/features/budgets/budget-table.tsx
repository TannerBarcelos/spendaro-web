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
  StarIcon,
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
import { useUpdateBudget } from "./_api/mutations/useUpdateBudget";
import { toast } from "sonner";
import { useNavigate } from "@tanstack/react-router";

type BudgetTableProps = {
  budgets: Budget[];
};

function BudgetTable({ budgets }: BudgetTableProps) {
  return (
    <Table className="mt-8">
      <BudgetTableHeader />
      <BudgetTableBody budgets={budgets} />
    </Table>
  );
}

function BudgetTableHeader() {
  return (
    <TableHeader>
      <TableRow>
        <TableHead>Budget Name</TableHead>
        <TableHead>Budget Description</TableHead>
        <TableHead>Budget Amount</TableHead>
        <TableHead>Created</TableHead>
        <TableHead>Actions</TableHead>
      </TableRow>
    </TableHeader>
  );
}

function BudgetTableBody({ budgets }: BudgetTableProps) {
  const navigate = useNavigate();
  const updateBudget = useUpdateBudget();
  const handleUpdateFavorite = async (budget_id: number, favorite: boolean) => {
    const updated_budget = await updateBudget.mutateAsync({
      budget_id: budget_id.toString(),
      budget_to_update: { is_favorite: !favorite },
    });
    toast.success(
      `Added ${updated_budget.data.budget_name} budget to favorites`
    );
  };
  return (
    <TableBody>
      {budgets.map((budget) => {
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
                    <Button variant="ghost" className="hover:bg-slate-200/50">
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
                    onClick={() =>
                      handleUpdateFavorite(budget.id, budget.is_favorite)
                    }
                  >
                    <StarIcon />{" "}
                    {budget.is_favorite
                      ? "Unfavorite Budget"
                      : "Favorite Budget"}
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
  );
}

export default BudgetTable;