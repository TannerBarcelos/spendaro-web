import { Landmark } from "lucide-react";
import { QuickViewBox } from ".";

function Income() {
  return (
    <QuickViewBox
      title="This Months Income"
      icon={<Landmark width={20} height={20} />}
    >
      <h1></h1>
    </QuickViewBox>
  );
}
export default Income;
