import { cn } from "@/libs/utils";
import { LucideIcon } from "lucide-react";
import { Tooltip } from "./tooltip";

type Props = {
  icon: LucideIcon;
  count: string;
  tooltipTitle: string;
  color?: string;
};

export const PostActionButton = ({
  icon,
  count,
  tooltipTitle,
  color,
}: Props) => {
  let Icon = icon;
  return (
    <button className="flex items-center text-neutral-500 group">
      <Tooltip content={tooltipTitle}>
        <Icon
          className={cn(
            "size-8 md:size-9 group-hover:bg-sky-500/20 p-2 rounded-full group-hover:text-sky-500 transition-colors duration-200 ease-in-out",
            color === "green" &&
              "group-hover:bg-green-500/20 group-hover:text-green-500",
            color === "red" &&
              "group-hover:bg-rose-500/20 group-hover:text-rose-500"
          )}
        />
      </Tooltip>
      <span
        className={cn(
          "text-xs md:text-sm group-hover:text-sky-500 transition-colors duration-200 ease-in-out",
          color === "green" && "group-hover:text-green-500",
          color === "red" && "group-hover:text-rose-500"
        )}
      >
        {count}
      </span>
    </button>
  );
};
