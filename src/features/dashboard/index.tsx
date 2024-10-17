import { greetTimeOfDay } from "@/lib/utils";

export function DashboardPage() {
  return (
    <div className="mt-4">
      <h1 className="text-3xl font-semibold">{greetTimeOfDay()}</h1>
    </div>
  );
}
