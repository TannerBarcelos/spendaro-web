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
  ArchiveRestoreIcon,
  ArchiveXIcon,
  ArrowUpRightFromCircleIcon,
  Edit2,
  MoreHorizontal,
  StarIcon,
  StarOffIcon,
  Trash2,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Budget } from "@/api/budget-api/types";
import { useUpdateBudget } from "@/api/budget-api/mutations";
import { toast } from "sonner";
import { useNavigate } from "@tanstack/react-router";
import { formatDate } from "@/lib/utils";
import { queryClient } from "@/api/query-client";
import { useBudgetStore } from "@/stores/budget-store";

type BudgetTableProps = {
  budgets: Budget[];
};

function BudgetTable({ budgets }: BudgetTableProps) {
  return (
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
      <BudgetTableBody budgets={budgets} />
    </Table>
  );
}

function BudgetTableBody({ budgets }: BudgetTableProps) {
  const setActiveBudget = useBudgetStore((state) => state.setActiveBudget);
  const navigate = useNavigate();
  const updateBudget = useUpdateBudget();

  const handleUpdateFavoriteStatus = async (
    budget_id: number,
    favorite: boolean
  ) => {
    const updated_budget = await updateBudget.mutateAsync({
      budget_id: budget_id.toString(),
      budget_to_update: { is_favorite: !favorite },
    });
    const toast_message = updated_budget.data.is_favorite
      ? "favorited"
      : ("unfavorited" as const);
    toast.success(`Budget ${toast_message} successfully`);
    queryClient.invalidateQueries({ queryKey: ["budgets"] });
  };

  const handleUpdateArchivedStatus = async (
    budget_id: number,
    is_active: boolean
  ) => {
    const updated_budget = await updateBudget.mutateAsync({
      budget_id: budget_id.toString(),
      budget_to_update: { is_active: !is_active },
    });
    const toast_message = updated_budget.data.is_active
      ? "restored"
      : "archived";
    toast.success(`Budget ${toast_message} successfully`);
    queryClient.invalidateQueries({ queryKey: ["budgets"] });
  };

  return (
    <TableBody>
      {budgets.map((budget) => {
        return (
          <TableRow key={budget.id}>
            <TableCell>{budget.budget_name}</TableCell>
            <TableCell className="text-clip">
              {budget.budget_description}
            </TableCell>
            <TableCell>${budget.amount}</TableCell>
            <TableCell title={String(budget.createdAt)}>
              {formatDate(budget.createdAt)}
            </TableCell>
            <TableCell>
              <DropdownMenu>
                <div className="flex flex-row items-center w-max gap-2">
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost">
                      <MoreHorizontal size={16} />
                    </Button>
                  </DropdownMenuTrigger>
                </div>
                <DropdownMenuContent>
                  <DropdownMenuItem
                    onClick={() => {
                      setActiveBudget(budget.id.toString());
                      navigate({
                        to: `/budgeting/${budget.id}`,
                      });
                    }}
                  >
                    <ArrowUpRightFromCircleIcon /> View Budget
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    disabled={!budget.is_active}
                    onClick={() =>
                      handleUpdateFavoriteStatus(budget.id, budget.is_favorite)
                    }
                  >
                    {budget.is_favorite ? <StarOffIcon /> : <StarIcon />}
                    {budget.is_favorite
                      ? "Unfavorite Budget"
                      : "Favorite Budget"}
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    title="Restore this budget to favorite it"
                    onClick={() =>
                      handleUpdateArchivedStatus(budget.id, budget.is_active)
                    }
                  >
                    {budget.is_active ? (
                      <ArchiveXIcon />
                    ) : (
                      <ArchiveRestoreIcon />
                    )}
                    {budget.is_active ? "Archive Budget" : "Restore Budget"}
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Edit2 /> Edit budget
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-destructive hover:bg-destructive">
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
