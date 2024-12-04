import { motion } from "framer-motion";
import BudgetForm from "../budgets/_components/budget-form";
import { useNavigate } from "@tanstack/react-router";
import { useOnboardingStore } from "@/stores/onboarding-store";

function CreateInitialBudget() {
  const navigate = useNavigate();
  const { setBudget } = useOnboardingStore();
  return (
    <div className="container relative mx-auto flex min-h-screen flex-col items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-center mb-2 bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-4xl font-bold text-transparent">
          Create your first budget
        </h1>
        <p className="text-md text-muted-foreground my-4">
          Everything in Spendaro starts with a budget. Let's create one to get
          started.
        </p>
        <div className="p-4 shadow-sm">
          <BudgetForm
            onSubmit={(budget) => {
              setBudget(
                budget.budget_name,
                budget.budget_description,
                budget.amount
              );
              navigate({
                to: "/onboarding/create-initial-categories",
              });
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}
export default CreateInitialBudget;
