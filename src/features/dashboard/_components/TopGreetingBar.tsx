import { Button } from "@/components/ui/button";
import { HandCoins, Landmark, Plus } from "lucide-react";
import { greetTimeOfDay as greet } from "@/lib/utils";
import DropdownMenu from "@/components/DropdownMenu";

function TopGreetingBar() {
  return (
    <div className="flex flex-row items-center mb-4 w-max">
      <h1 className="text-xl lg:text-2xl font-semibold">{greet()}</h1>
      <DropdownMenu
        menuItems={[
          {
            name: "New Budget",
            link: "/budget/new",
            linkIcon: <HandCoins />,
          },
          {
            name: "New Transaction",
            link: "/transaction/new",
            linkIcon: <Landmark />,
          },
        ]}
      >
        <Button className="text-sm w-10 h-10 rounded-full ml-4">
          <Plus size={16} />
        </Button>
      </DropdownMenu>
    </div>
  );
}
export default TopGreetingBar;
