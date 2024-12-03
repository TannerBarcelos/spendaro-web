import { useOnboardingStore } from "@/stores/onboarding-store";

function SetInitialCategories() {
  // Pull out the onboarding budget information from the store
  const {
    budget_description,
    budget_name,
    amount: budget_amount,
  } = useOnboardingStore();
  console.log(budget_description, budget_name, budget_amount);
  return <div>SetInitialCategories</div>;
}

export default SetInitialCategories;
