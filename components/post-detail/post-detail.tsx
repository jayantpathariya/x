import {
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
import { PostThread } from "./post-thread";

export const PostDetail = () => {
  return (
    <div>
      <article className="bg-black p-4 pt-0 pb-2 border-b border-neutral-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-2">
            <Image
              src="/profile-picture.png"
              width={40}
              height={40}
              alt="Profile picture"
              className="rounded-full size-10"
            />
            <div>
              <p className="font-semibold">Joseph Beck</p>
              <p className="text-sm text-neutral-500">@josephbeck</p>
            </div>
          </div>
          <div className="flex items-center gap-x-1">
            <button className="bg-neutral-100 text-neutral-900 px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-neutral-100/80 transition-colors duration-200 ease-in-out md:hidden">
              Follow
            </button>
            <Tooltip content="More">
              <button className="p-2 hover:bg-sky-500/20 rounded-full group  transition-colors duration-200 ease-in-out">
                <Ellipsis className="size-5 text-neutral-500 group-hover:text-sky-500  transition-colors duration-200 ease-in-out" />
              </button>
            </Tooltip>
          </div>
        </div>
        <div className="border-b border-neutral-700 mt-2">
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa eaque
            quo recusandae animi harum, dolor minus sapiente vitae?
          </p>
          <div className="relative aspect-square">
            <Image
              src="https://cdn.pixabay.com/photo/2024/05/02/16/22/parrots-8735074_1280.jpg"
              alt="Post image"
              fill
              className="object-cover object-center rounded-2xl"
            />
          </div>
          <div className="flex items-center gap-x-2 my-4 text-sm text-neutral-500">
            <span>3:08 AM</span>
            <span>•</span>
            <span>Jul 12, 2023</span>
            <span>•</span>
            <span>1M Views</span>
          </div>
        </div>
        <div className="flex items-center gap-x-2 justify-between mt-2  text-neutral-500 text-sm">
          <PostActionButton
            icon={MessageCircle}
            count="235"
            tooltipTitle="Reply"
          />
          <PostActionButton icon={Repeat2} count="604" tooltipTitle="Repost" />
          <PostActionButton
            icon={Heart}
            count="3.5K"
            tooltipTitle="Like"
            color="red"
          />
          <PostActionButton
            icon={Bookmark}
            count="1.4k"
            tooltipTitle="Bookmark"
            color="green"
          />
          <Tooltip content="Share">
            <button className="group p-2 hover:bg-sky-500/20 rounded-full transition-colors duration-200 ease-in-out">
              <Share className="size-5 group-hover:text-sky-500 transition-colors duration-200 ease-in-out" />
            </button>
          </Tooltip>
        </div>
      </article>
      <PostThread isImage isThread />
      <PostThread isThread />
      <PostThread />
      <PostThread isThread />
      <PostThread />
      <PostThread isImage />
      <PostThread />
    </div>
  );
};
