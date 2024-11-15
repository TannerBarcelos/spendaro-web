import ErrorFields from "@/components/form-error-field";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { errorBuilder } from "@/lib/utils";
import { useForm } from "@tanstack/react-form";
import { zodValidator } from "@tanstack/zod-form-adapter";
import { BadgeDollarSignIcon, PencilIcon } from "lucide-react";
import { Label } from "@radix-ui/react-label";
import { toast } from "sonner";
import { useCreateBudget } from "@/api/budget-api/mutations";
import { z } from "zod";
import { useNavigate } from "@tanstack/react-router";
import { Textarea } from "@/components/ui/textarea";

export const budgetToCreateSchema = z.object({
  budget_name: z
    .string()
    .min(3, "A budget name of at least 3 characters is required"),
  budget_description: z
    .string()
    .min(5, "A budget description of at least 5 characters is required"),
  budget_color: z.string().optional(),
  amount: z.number().min(0, "Starting budget amount must be greater than 0"),
});

export type BudgetToCreate = z.infer<typeof budgetToCreateSchema>;

function BudgetForm() {
  const navigate = useNavigate();
  const createBudgetMutation = useCreateBudget();
  const form = useForm({
    defaultValues: {
      budget_name: "",
      budget_description: "",
      amount: 0,
      budget_color: "#006eff",
    } as BudgetToCreate,
    validatorAdapter: zodValidator(),
    validators: {
      onChange: budgetToCreateSchema,
      onSubmit: budgetToCreateSchema,
    },
    onSubmit: async ({ value }) => {
      try {
        const { data } = await createBudgetMutation.mutateAsync(value);
        toast.success("Budget created successfully!", {
          position: "bottom-right",
          duration: 2_000,
        });
        form.reset();
        navigate({
          to: `/budgeting/${data.id}`,
        });
      } catch (error) {
        const errorMessage = errorBuilder(error);
        toast.error(errorMessage, {
          position: "top-center",
          richColors: true,
        });
      }
    },
  });
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
        className="space-y-6 w-full"
      >
        <form.Field
          name="budget_name"
          children={(field) => {
            return (
              <div className="space-y-2">
                <Label
                  htmlFor={field.name}
                  className="text-xs font-normal text-gray-700 dark:text-foreground"
                >
                  Budget Name
                </Label>
                <div className="relative">
                  <PencilIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <Input
                    type="text"
                    id={field.name}
                    name={field.name}
                    placeholder="Name of the budget"
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    className="pl-10 pr-4 py-2 w-full border-gray-300 dark:border-foreground/50 rounded-lg dark:focus:ring-secondary dark:focus:border-secondary"
                    required
                  />
                </div>
                <ErrorFields field={field} />
              </div>
            );
          }}
        />
        <form.Field
          name="budget_description"
          children={(field) => {
            return (
              <div className="space-y-2">
                <Label
                  htmlFor={field.name}
                  className="text-xs font-normal text-gray-700 dark:text-foreground"
                >
                  Budget Description
                </Label>
                <div className="relative">
                  <Textarea
                    id={field.name}
                    name={field.name}
                    placeholder="Short description of the budget"
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    className="pr-4 py-2 w-full border-gray-300 dark:border-foreground/50 rounded-lg dark:focus:ring-secondary dark:focus:border-secondary"
                    required
                  />
                </div>
                <ErrorFields field={field} />
              </div>
            );
          }}
        />
        <form.Field
          name="amount"
          children={(field) => {
            return (
              <div className="space-y-2">
                <Label
                  htmlFor={field.name}
                  className="text-xs font-normal text-gray-700 dark:text-foreground"
                >
                  Starting Budget Amount
                </Label>
                <div className="relative">
                  <BadgeDollarSignIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <Input
                    type="number"
                    id={field.name}
                    name={field.name}
                    placeholder="Starting budget amount"
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.valueAsNumber)}
                    className="pl-10 pr-4 py-2 w-full border-gray-300 dark:border-foreground/50 rounded-lg dark:focus:ring-secondary dark:focus:border-secondary"
                    required
                  />
                </div>
                <ErrorFields field={field} />
              </div>
            );
          }}
        />
        <form.Field
          name="budget_color"
          children={(field) => {
            return (
              <div className="space-y-2">
                <Label
                  htmlFor={field.name}
                  className="text-xs font-normal text-gray-700 dark:text-foreground"
                >
                  Budget color (optional)
                </Label>
                <Input
                  type="color"
                  id={field.name}
                  name={field.name}
                  placeholder="Starting budget amount"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  className="w-20 border-none p-0"
                />
                <ErrorFields field={field} />
              </div>
            );
          }}
        />
        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
          children={([canSubmit, isSubmitting]) => (
            <Button
              disabled={!canSubmit}
              type="submit"
              className="w-full bg-primary dark:bg-secondary hover:bg-primary/90 text-white dark:text-background text-sm font-normal p-6 rounded-lg flex items-center justify-center"
            >
              <span>
                {isSubmitting ? "Creating Budget..." : "Create Budget"}
              </span>
            </Button>
          )}
        />
      </form>
    </div>
  );
}
export default BudgetForm;
