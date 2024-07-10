import {
  BarChart2,
  Bookmark,
  Heart,
  MessageCircle,
  Repeat2,
  Share,
} from "lucide-react";
import { PostActionButton } from "./post-action-button";

export const PostActions = () => {
  return (
    <div className="flex items-center justify-between gap-x-1 md:gap-x-10 mt-1">
      <div className="flex w-full items-center justify-between">
        <PostActionButton
          icon={MessageCircle}
          count="78"
          tooltipTitle="Reply"
        />
        <PostActionButton
          icon={Repeat2}
          count="1K"
          tooltipTitle="Repost"
          color="green"
        />
        <PostActionButton
          icon={Heart}
          count="18K"
          tooltipTitle="Like"
          color="red"
        />
        <PostActionButton icon={BarChart2} count="1.6M" tooltipTitle="Views" />
      </div>
      <div className="flex items-center">
        <button className="text-neutral-500 p-2 hover:bg-sky-500/30 rounded-full group transition-colors duration-200 ease-in-out hidden md:inline-block">
          <Bookmark className="size-5 group-hover:text-sky-500 transition-colors duration-200 ease-in-out" />
        </button>
        <button className="text-neutral-500 p-2 hover:bg-sky-500/30 rounded-full group transition-colors duration-200 ease-in-out">
          <Share className="size-4 md:size-5 group-hover:text-sky-500 transition-colors duration-200 ease-in-out" />
        </button>
      </div>
    </div>
  );
};
