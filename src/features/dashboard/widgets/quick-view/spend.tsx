import { CalendarClock } from "lucide-react";
import { QuickViewBox } from ".";

function Spend() {
  return (
    <QuickViewBox title="Spent This Month" icon={<CalendarClock />}>
      <h1></h1>
    </QuickViewBox>
  );
}
export default Spend;
