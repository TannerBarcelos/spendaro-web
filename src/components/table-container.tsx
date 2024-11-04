import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};

/**
 * TableContainer component that wraps its children with a styled div.
 *
 * @param {Object} props - The properties object.
 * @param {React.ReactNode} props.children - The child elements to be rendered inside the container.
 * @param {string} props.className - Additional class names to be applied to the container.
 *
 * @returns {JSX.Element} The rendered TableContainer component.
 *
 * @remarks
 * The `cn` function is used to conditionally join class names together, allowing for dynamic class name generation.
 */

function TableContainer({ children, className }: Props): JSX.Element {
  return (
    <div
      className={cn(
        `light:bg-slate-100/40 border border-slate-200/40 dark:border-slate-700/30 rounded-2xl min-h-[100px] px-3 flex items-center ${className}`
      )}
    >
      {children}
    </div>
  );
}

export default TableContainer;
