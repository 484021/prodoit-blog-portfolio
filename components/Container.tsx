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
        "flex flex-col mx-auto w-full px-2.5 md:px-20 pb-7 max-w-screen-xl",
        className
      )}
    >
      {children}
    </div>
  );
}
