import { BadgeDollarSign } from "lucide-react";
import { QuickViewBox } from ".";

function Today() {
  return (
    <QuickViewBox
      title="Today"
      icon={<BadgeDollarSign width={20} height={20} />}
    >
      <h1></h1>
    </QuickViewBox>
  );
}
export default Today;
