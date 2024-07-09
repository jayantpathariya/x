import { cn } from "@/libs/utils";
import {
  Earth,
  Image as ImageIcon,
  ImagePlay,
  MapPin,
  Smile,
} from "lucide-react";
import Image from "next/image";

export const NewPost = () => {
  const isFocused = false;

  return (
    <div className="flex gap-x-3 p-4 w-full">
      <Image
        src="/profile-picture.png"
        alt="Profile picture"
        width={40}
        height={40}
        className="size-10 rounded-full"
      />
      <div className="w-full">
        <div
          className={cn(
            "flex flex-col w-full border-neutral-700 md:pb-2",
            isFocused && " border-b"
          )}
        >
          <textarea
            name="post"
            id="post"
            placeholder="What is happening?!"
            className="w-full resize-none border-none outline-none bg-transparent text-lg placeholder:text-neutral-500"
          ></textarea>
          {isFocused && (
            <button className="text-sky-500 flex gap-x-2 items-center">
              <Earth className="size-4" />
              <span>Everyone can reply</span>
            </button>
          )}
        </div>
        <div className="md:mt-4 flex items-center justify-between">
          <div className="flex items-center gap-x-1">
            <button className="hover:bg-sky-500/20 p-2 rounded-full">
              <ImageIcon className="text-sky-500 size-5" />
            </button>
            <button className="hover:bg-sky-500/20 p-2 rounded-full">
              <ImagePlay className="text-sky-500 size-5" />
            </button>
            <button className="hover:bg-sky-500/20 p-2 rounded-full">
              <Smile className="text-sky-500 size-5" />
            </button>
            <button className="hover:bg-sky-500/20 p-2 rounded-full">
              <MapPin className="text-sky-500 size-5" />
            </button>
          </div>
          <button
            disabled
            className="bg-sky-500 hover:bg-sky-500/80 py-2 px-5 rounded-full font-semibold disabled:opacity-50 disabled:pointer-events-none transition-colors duration-200 ease-in-out"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};
