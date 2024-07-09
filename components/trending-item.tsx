import { Ellipsis } from "lucide-react";
import Link from "next/link";

export const TrendingItem = () => {
  return (
    <Link
      href="/post"
      className="flex items-center justify-between hover:bg-neutral-900/30 p-3 pb-0 last:pb-3 transition-colors duration-200 ease-in-out"
    >
      <div>
        <span className="text-xs text-neutral-600">Gaming • Trending</span>
        <p className="text-sm text-neutral-200 font-semibold">PlayStation 5</p>
        <span className="text-xs text-neutral-600">6,112 posts</span>
      </div>
      <button className="hover:bg-sky-500/20 p-1 group transition-colors duration-200 ease-in-out rounded-full">
        <Ellipsis className="size-5 text-neutral-500 group-hover:text-sky-500 transition-colors duration-200 ease-in-out" />
      </button>
    </Link>
  );
};
