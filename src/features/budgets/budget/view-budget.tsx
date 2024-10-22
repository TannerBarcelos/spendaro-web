import Page from "@/components/Page";

export function ViewBudget() {
  const budgetName = "Budget Name"; // TODO: Get budget name from API via api call for budget details in a loader for fretching budget by id
  return (
    <Page>
      <h1 className="text-xl lg:text-2xl font-semibold">{budgetName}</h1>
    </Page>
  );
}
