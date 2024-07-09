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
import Link from "next/link";

export const Post = () => {
  return (
    <Link
      href="/post"
      className="flex items-start gap-x-2 p-4 pb-2 hover:bg-neutral-900/80 transition-colors duration-200 ease-in-out border border-neutral-700"
    >
      <Image
        src="/profile-picture.png"
        width={40}
        height={40}
        alt="Profile picture"
        className="size-10 rounded-full"
      />
      <div>
        <div className="flex w-full justify-between  text-neutral-500">
          <div className="flex items-center gap-x-1 md:gap-x-2">
            <Link
              href="/profile"
              className=" text-neutral-200 font-semibold text-sm md:text-base line-clamp-1 hover:underline"
            >
              Ethel Richards
            </Link>
            <p className="text-sm">@scottrosa</p>
            <span>•</span>
            <span className="text-sm">21h</span>
          </div>
          <button className="p-2 hover:bg-sky-500/20 rounded-full group  transition-colors duration-200 ease-in-out">
            <Ellipsis className="size-5 text-neutral-500 group-hover:text-sky-500  transition-colors duration-200 ease-in-out" />
          </button>
        </div>
        <div>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ullam
            soluta cupiditate dolores velit tempore facilis libero, sed cumque
            sit reiciendis, harum assumenda exercitationem fuga fugit quaerat
            eligendi eos dicta.
          </p>
          <div className="relative aspect-video rounded-xl overflow-hidden border border-neutral-700 mt-3">
            <Image
              src="https://cdn.pixabay.com/photo/2024/04/19/04/39/kingfisher-8705377_1280.jpg"
              alt="Picture of the author"
              fill
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex items-center justify-between gap-x-1 md:gap-x-10 mt-1">
            <div className="flex w-full items-center justify-between">
              <button className="flex items-center text-neutral-500 group">
                <MessageCircle className="size-8 md:size-9 group-hover:bg-sky-500/20 p-2 rounded-full group-hover:text-sky-500 transition-colors duration-200 ease-in-out" />
                <span className="text-xs md:text-sm group-hover:text-sky-500 transition-colors duration-200 ease-in-out">
                  78
                </span>
              </button>

              <button className="flex items-center text-neutral-500 group">
                <Repeat2 className="size-8 md:size-9 group-hover:bg-green-500/20 p-2 rounded-full group-hover:text-green-500 transition-colors duration-200 ease-in-out" />
                <span className="text-xs md:text-sm group-hover:text-green-500 transition-colors duration-200 ease-in-out">
                  1K
                </span>
              </button>

              <button className="flex items-center text-neutral-500 group">
                <Heart className="size-8 md:size-9 group-hover:bg-rose-500/20 p-2 rounded-full group-hover:text-rose-500 transition-colors duration-200 ease-in-out" />
                <span className="text-xs md:text-sm group-hover:text-rose-500 transition-colors duration-200 ease-in-out">
                  18K
                </span>
              </button>

              <button className="flex items-center text-neutral-500 group">
                <BarChart2 className="size-8 md:size-9 group-hover:bg-sky-500/20 p-2 rounded-full group-hover:text-sky-500 transition-colors duration-200 ease-in-out" />
                <span className="text-xs md:text-sm group-hover:text-sky-500 transition-colors duration-200 ease-in-out">
                  1.6M
                </span>
              </button>
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
        </div>
      </div>
    </Link>
  );
};
