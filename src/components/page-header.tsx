import { cn } from "@/lib/utils";

type PageHeaderProps = React.HTMLAttributes<HTMLDivElement> & {
  text: string;
  children?: React.ReactNode;
};

function PageHeader({ text, className, children }: PageHeaderProps) {
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
      {children}
    </div>
  );
}

export default PageHeader;
