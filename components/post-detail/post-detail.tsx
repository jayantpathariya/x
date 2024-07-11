import {
  Bookmark,
  Ellipsis,
  Heart,
  MessageCircle,
  Repeat2,
  Share,
} from "lucide-react";
import Image from "next/image";
import { Tooltip } from "../tooltip";

export const PostDetail = () => {
  return (
    <div>
      <article className="bg-black p-4 pt-0">
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
            <button className="bg-neutral-100 text-neutral-900 px-4 py-1.5 rounded-full text-sm font-semibold">
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
          <Tooltip content="Comment">
            <button className="flex items-center gap-x-1">
              <MessageCircle className="size-5" />
              <span>235</span>
            </button>
          </Tooltip>
          <Tooltip content="Repost">
            <button className="flex items-center gap-x-1">
              <Repeat2 />
              <span>604</span>
            </button>
          </Tooltip>
          <Tooltip content="Like">
            <button className="flex items-center gap-x-1">
              <Heart className="size-5" />
              <span>3.5K</span>
            </button>
          </Tooltip>
          <Tooltip content="Bookmark">
            <button className="flex items-center gap-x-1">
              <Bookmark className="size-5" />
              1.4k
            </button>
          </Tooltip>
          <Tooltip content="Share">
            <button className="flex items-center gap-x-1">
              <Share className="size-5" />
            </button>
          </Tooltip>
        </div>
      </article>
      {/* <PostThread /> */}
    </div>
  );
};
