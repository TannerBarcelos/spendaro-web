import Page from "@/components/Page";
import { useGetBudgets } from "@/services/api/budget/budget-queries";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Edit2, MoreHorizontal, Star, Trash2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Budget } from "@/services/api/budget/budget-fetchers";

export function BudgetPage() {
  const { data, isLoading, isError } = useGetBudgets();

  if (isLoading) {
    return <Page>Loading...</Page>;
  }

  if (isError) {
    return <Page>Error fetching budgets</Page>;
  }

  return (
    <Page>
      <h1 className="text-xl lg:text-2xl font-semibold">Budgets</h1>
      <AllBudgets data={data?.data} />
    </Page>
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
  );
}
