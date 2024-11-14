import { greetTimeOfDay as greet } from "@/lib/utils";

function TopGreetingBar() {
  return (
    <div className="flex flex-row items-center w-max">
      <h1 className="text-xl lg:text-2xl font-semibold gap-4">{greet()}</h1>
    </div>
  );
}
export default TopGreetingBar;
