import { budgetToCreateSchema } from "@/features/budgets/_components/budget-form";
import { z } from "zod";
import { create } from "zustand";

type OnboardingStore = z.infer<typeof budgetToCreateSchema> & {
    setBudget(name: string, description: string, amount: number): void;
}

export const useOnboardingStore = create<OnboardingStore>((set) => ({
    budget_name: "",
    budget_description: "",
    amount: 0,
    setBudget: (name, description, amount) => set({ budget_name: name, budget_description: description, amount }),
}));



