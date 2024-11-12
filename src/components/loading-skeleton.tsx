import { cn } from "@/lib/utils";
import { Skeleton } from "./ui/skeleton";

function LoadingSkeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "border-2 bg-card/30 min-h-20 grid grid-cols-2 mb-4 rounded-xl p-2",
        className
      )}
    >
      <div className="w-full flex flex-col justify-center gap-2">
        <Skeleton className="h-4 w-24 bg-muted animate-pulse rounded" />
        <Skeleton className="h-3 w-32 bg-muted animate-pulse rounded" />
      </div>
      <div className="items-center flex justify-center">
        <Skeleton className="h-4 w-16 bg-muted animate-pulse rounded" />
      </div>
    </div>
  );
}

export default LoadingSkeleton;
