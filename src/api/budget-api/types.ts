import { z } from 'zod';

export const BudgetSchema = z.object({
  id: z.number(),
  user_id: z.number(),
  budget_name: z.string(),
  budget_description: z.string(),
  amount: z.number(),
  is_favorite: z.boolean(),
  is_active: z.boolean(),
  budget_color: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type Budget = z.infer<typeof BudgetSchema>;

export type BudgetApiResponse = {
  data: Budget;
  message: string;
}

export type BudgetsApiResponse = {
  data: Array<Budget>;
  message: string;
}