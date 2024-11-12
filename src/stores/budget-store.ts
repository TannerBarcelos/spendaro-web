import { create } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";

interface BudgetStore {
  active_budget: string | undefined;
  setActiveBudget: (budget_id: string) => void;
  clearActiveBudget: () => void;
}

export const useBudgetStore = create<BudgetStore>()(
  persist<BudgetStore>(
    (set) => ({
      active_budget: undefined, // The ID of the currently active budget - gets loaded upon initial API call on the dashboard page for selected budget, and all subsequent API calls will use this budget ID
      setActiveBudget: (budget_id: string) => set({ active_budget: budget_id }),
      clearActiveBudget: () => {
        set({ active_budget: undefined });
        localStorage.removeItem("budget-storage");
      },
    }),
    {
      name: "budget-storage",
    } as PersistOptions<BudgetStore>
  )
);
