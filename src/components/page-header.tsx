import { cn } from "@/lib/utils";

function PageHeader({
  text,
  className,
}: {
  text: string;
  className?: React.HTMLAttributes<HTMLDivElement>;
}) {
  return (
    <div
      className={cn(
        "w-full flex flex-row items-center justify-between h-16",
        className
      )}
    >
      <div>
        <h1 className="text-xl lg:text-2xl font-semibold mr-4">{text}</h1>
      </div>
    </div>
  );
}

export default PageHeader;
