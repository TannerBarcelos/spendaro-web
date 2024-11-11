export type Budget = {
  id:                 number;
  user_id:            number;
  budget_name:        string;
  budget_description: string;
  amount:             number;
  is_favorite:        boolean;
  is_active:          boolean;
  createdAt:          Date;
  updatedAt:          Date;
}

export type BudgetApiResponse = {
  data:    Budget;
  message: string;
}

export type BudgetsApiResponse = {
  data:    Array<Budget>;
  message: string;
}