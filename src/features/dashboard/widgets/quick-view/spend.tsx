import { CalendarClock } from "lucide-react";
import { QuickViewBox } from ".";

function Spend() {
  return (
    <QuickViewBox
      title="Spent This Month"
      icon={<CalendarClock width={20} height={20} />}
    >
      <h1></h1>
    </QuickViewBox>
  );
}
export default Spend;
