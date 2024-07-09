import {
  Earth,
  Image as ImageIcon,
  ImagePlay,
  MapPin,
  Smile,
} from "lucide-react";
import Image from "next/image";

export const NewPost = () => {
  return (
    <div className="flex gap-x-3 p-4">
      <Image
        src="/profile-picture.png"
        alt="Profile picture"
        width={40}
        height={40}
        className="size-12 rounded-full"
      />
      <div className="w-full">
        <div className="flex flex-col w-full border-b border-neutral-500 pb-2">
          <textarea
            name="post"
            id="post"
            placeholder="What is happening?!"
            className="w-full resize-none border-none outline-none bg-transparent text-lg placeholder:text-neutral-500"
          ></textarea>
          <button className="text-sky-500 flex gap-x-2 items-center">
            <Earth className="size-4" />
            <span>Everyone can reply</span>
          </button>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-x-1">
            <button className="hover:bg-sky-500/40 p-2 rounded-full">
              <ImageIcon className="text-sky-500 size-5" />
            </button>
            <button className="hover:bg-sky-500/40 p-2 rounded-full">
              <ImagePlay className="text-sky-500 size-5" />
            </button>
            <button className="hover:bg-sky-500/40 p-2 rounded-full">
              <Smile className="text-sky-500 size-5" />
            </button>
            <button className="hover:bg-sky-500/40 p-2 rounded-full">
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
