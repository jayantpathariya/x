import { cn } from "@/libs/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  title: string;
};

export const SidebarBox = ({ children, className, title }: Props) => {
  return (
    <div
      className={cn("border border-neutral-700 p-3 rounded-xl mt-4", className)}
    >
      <h2 className="font-bold">{title}</h2>
      {children}
    </div>
  );
};
