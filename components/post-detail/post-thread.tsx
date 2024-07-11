import { cn } from "@/libs/utils";
import {
  BarChart2,
  Bookmark,
  Ellipsis,
  Heart,
  MessageCircle,
  Repeat2,
  Share,
} from "lucide-react";
import Image from "next/image";
import { PostActionButton } from "../post-action-button";
import { Tooltip } from "../tooltip";

type Props = {
  isThread?: boolean;
  isImage?: boolean;
};

export const PostThread = ({ isThread, isImage }: Props) => {
  return (
    <article
      className={cn(
        "bg-black p-4 flex gap-x-2",
        !isThread && "border-b border-neutral-700",
        !isThread && "pb-2"
      )}
    >
      <div className="shrink-0 flex flex-col items-center relative">
        <Image
          src="/profile-picture.png"
          width={40}
          height={40}
          alt="Profile picture"
          className="rounded-full size-10 z-10"
        />
        {isThread && (
          <div className="absolute w-0.5 bg-neutral-800 top-[40px] bottom-[-34px] left-1/2 transform -translate-x-1/2"></div>
        )}
      </div>
      <div className="flex-grow">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-2">
            <div>
              <p className="font-semibold">Joseph Beck</p>
              <p className="text-sm text-neutral-500">@josephbeck</p>
            </div>
          </div>
          <Tooltip content="More">
            <button className="p-2 hover:bg-sky-500/20 rounded-full group transition-colors duration-200 ease-in-out">
              <Ellipsis className="size-5 text-neutral-500 group-hover:text-sky-500 transition-colors duration-200 ease-in-out" />
            </button>
          </Tooltip>
        </div>
        <div className="mt-2">
          <p className={cn(isImage && "mb-4")}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa eaque
            quo recusandae animi harum, dolor minus sapiente vitae?
          </p>
          {isImage && (
            <div className="relative aspect-video">
              <Image
                src="https://cdn.pixabay.com/photo/2024/05/02/16/22/parrots-8735074_1280.jpg"
                alt="Post image"
                fill
                className="object-cover object-center rounded-2xl"
              />
            </div>
          )}
        </div>
        <div className="flex items-center gap-x-2 justify-between text-neutral-500 text-xs">
          <PostActionButton
            icon={MessageCircle}
            count="235"
            tooltipTitle="Reply"
            size="sm"
          />

          <PostActionButton
            icon={Repeat2}
            count="604"
            tooltipTitle="Repost"
            size="sm"
          />
          <PostActionButton
            icon={Heart}
            count="3.5K"
            tooltipTitle="Like"
            color="red"
            size="sm"
          />
          <PostActionButton
            icon={BarChart2}
            count="88k"
            tooltipTitle="Views"
            size="sm"
          />
          <div className="flex items-center">
            <Tooltip content="Bookmark">
              <button className="group p-2 hover:bg-sky-500/20 rounded-full transition-colors duration-200 ease-in-out">
                <Bookmark className="size-4 group-hover:text-sky-500 transition-colors duration-200 ease-in-out" />
              </button>
            </Tooltip>
            <Tooltip content="Share">
              <button className="group p-2 hover:bg-sky-500/20 rounded-full transition-colors duration-200 ease-in-out">
                <Share className="size-4 group-hover:text-sky-500 transition-colors duration-200 ease-in-out" />
              </button>
            </Tooltip>
          </div>
        </div>
      </div>
    </article>
  );
};
