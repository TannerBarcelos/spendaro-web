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
      <Table className="mt-8">
        <TableHeader>
          <TableRow>
            <TableHead>Budget Name</TableHead>
            <TableHead>Budget Description</TableHead>
            <TableHead>Budget Amount</TableHead>
            <TableHead>Created</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.data.map((budget: any) => {
            return (
              <TableRow key={budget.id}>
                <TableCell>{budget.budget_name}</TableCell>
                <TableCell>{budget.budget_description}</TableCell>
                <TableCell>{budget.amount}</TableCell>
                <TableCell>
                  {new Date(budget.createdAt).toLocaleDateString()}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Page>
  );
}
