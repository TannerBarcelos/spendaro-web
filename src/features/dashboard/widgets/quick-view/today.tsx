import { BadgeDollarSign } from "lucide-react";
import { QuickViewBox } from ".";

function Today() {
  return (
    <QuickViewBox title="Today" icon={<BadgeDollarSign />}>
      <h1></h1>
    </QuickViewBox>
  );
}
export default Today;
