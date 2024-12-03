import { useOnboardingStore } from "@/stores/onboarding-store";

function SetInitialCategories() {
  const {
    budget_description,
    budget_name,
    amount: budget_amount,
  } = useOnboardingStore();
  console.log(budget_description, budget_name, budget_amount);
  return <div>SetInitialCategories</div>;
}
export default SetInitialCategories;
