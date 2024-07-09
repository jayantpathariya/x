import { Ellipsis } from "lucide-react";

export const TrendingItem = () => {
  return (
    <div className="flex items-center justify-between mt-2">
      <div>
        <span className="text-xs text-neutral-600">Gaming • Trending</span>
        <p className="text-sm text-neutral-200 font-semibold">PlayStation 5</p>
        <span className="text-xs text-neutral-600">6,112 posts</span>
      </div>
      <Ellipsis className="size-5 text-neutral-500" />
    </div>
  );
};
