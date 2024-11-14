import { greetTimeOfDay as greet } from "@/lib/utils";

function TopContextBar() {
  return (
    <div className="flex flex-row items-center w-max my-6">
      <h1 className="text-xl lg:text-2xl font-semibold">{greet()}</h1>
    </div>
  );
}
export default TopContextBar;
