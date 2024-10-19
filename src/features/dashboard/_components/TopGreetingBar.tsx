import { greetTimeOfDay as greet } from "@/lib/utils";

function TopGreetingBar() {
  return (
    <div className="flex flex-row items-center mb-4 w-max">
      <h1 className="text-xl lg:text-2xl font-semibold">{greet()}</h1>
    </div>
  );
}
export default TopGreetingBar;
