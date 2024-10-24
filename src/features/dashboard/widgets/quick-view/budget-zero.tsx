import { PiggyBank } from "lucide-react";
import { QuickViewBox } from ".";

function BudgetZero() {
  return (
    <QuickViewBox
      title="Budget Zero"
      icon={<PiggyBank width={20} height={20} />}
    >
      <h1></h1>
    </QuickViewBox>
  );
}
export default BudgetZero;
