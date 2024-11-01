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
  data: Budget[];
};

function BudgetTable({ data }: BudgetTableProps) {
  const navigate = useNavigate();
  const updateBudget = useUpdateBudget();
  const handleUpdateFavorite = async (budget_id: number, favorite: boolean) => {
    const updated_budget = await updateBudget.mutateAsync({
      budget_id: budget_id.toString(),
      budget_to_update: { isFavorited: !favorite },
    });
    toast.success(
      `Added ${updated_budget.data.budget_name} budget to favorites`
    );
  };
  return (
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
        {data.map((budget: Budget) => {
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
                      disabled={budget.isFavorited}
                      onClick={() =>
                        handleUpdateFavorite(budget.id, budget.isFavorited)
                      }
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
  );
}
export default BudgetTable;
