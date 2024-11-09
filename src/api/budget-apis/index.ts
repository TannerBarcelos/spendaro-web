// Describes the shape of the data that the API will return for a budget
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

export type BudgetResponse = {
  data:    Budget;
  message: string;
}

export type BudgetsResponse = {
  data:    Array<Budget>;
  message: string;
}