import { cn } from "@/lib/utils";

export default function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "flex flex-col mx-auto max-w-screen-xl min-h-screen pt-0 md:pt-8 p-8",
        className
      )}
    >
      {children}
    </div>
  );
}
