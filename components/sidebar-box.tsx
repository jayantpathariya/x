import { cn } from "@/libs/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  title: string;
};

export const SidebarBox = ({ children, className, title }: Props) => {
  return (
    <div
      className={cn(
        "border border-neutral-700 rounded-xl mt-4 overflow-hidden",
        className
      )}
    >
      <h2 className="font-bold p-3">{title}</h2>
      {children}
    </div>
  );
};
