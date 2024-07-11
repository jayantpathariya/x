"use client";

import { Ellipsis } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { HoverCard } from "./hover-card";
import { PostActions } from "./post-actions";
import { Tooltip } from "./tooltip";

export const Post = () => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push(`/username/status/postId`);
  };

  return (
    <article
      onClick={handleNavigate}
      className="flex items-start gap-x-2 p-4 pb-2 hover:bg-neutral-900/80 transition-colors duration-200 ease-in-out border border-neutral-700 cursor-pointer"
    >
      <Link href={"/username"} className="size-10 shrink-0">
        <Image
          src="/profile-picture.png"
          width={40}
          height={40}
          alt="Profile picture"
          className=" rounded-full size-10"
        />
      </Link>
      <div>
        <div className="flex w-full justify-between  text-neutral-500">
          <div className="flex items-center gap-x-1 md:gap-x-2">
            <HoverCard>
              <Link
                href={"/username"}
                className=" text-neutral-200 font-semibold text-sm md:text-base line-clamp-1 hover:underline"
              >
                Ethel Richards
              </Link>
            </HoverCard>
            <HoverCard>
              <Link href={"/username"} className="text-sm">
                @scottrosa
              </Link>
            </HoverCard>
            <span>•</span>
            <span className="text-sm">21h</span>
          </div>
          <Tooltip content="More">
            <button className="p-2 hover:bg-sky-500/20 rounded-full group  transition-colors duration-200 ease-in-out">
              <Ellipsis className="size-5 text-neutral-500 group-hover:text-sky-500  transition-colors duration-200 ease-in-out" />
            </button>
          </Tooltip>
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

          <PostActions />
        </div>
      </div>
    </article>
  );
};
