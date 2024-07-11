import { HoverCard } from "@/components/hover-card";
import { PostActions } from "@/components/post-actions";
import { Tooltip } from "@/components/tooltip";
import { Ellipsis } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const NotificationMentionItem = () => {
  return (
    <div className="p-4 border-b border-neutral-500 hover:bg-neutral-900/80 transition-colors duration-200 ease-in-out cursor-pointer">
      <div className="flex gap-x-2">
        <div className="size-9 shrink-0">
          <Image
            src="/profile-picture.png"
            width={40}
            height={40}
            alt="Profile picture "
            className="w-full rounded-full"
          />
        </div>
        <div>
          <div className="flex items-center justify-between text-neutral-500">
            <div className="flex items-center gap-x-2 text-sm">
              <HoverCard>
                <Link
                  href="/username"
                  className="text-base text-neutral-200 font-semibold hover:underline"
                >
                  Bertha Silva
                </Link>
              </HoverCard>
              <HoverCard>
                <span className="cursor-pointer">@owen</span>
              </HoverCard>
              <span>•</span>
              <p>Jul 9</p>
            </div>
            <Tooltip content="More">
              <button className="hover:bg-sky-500/20 p-1 rounded-full group">
                <Ellipsis className="group-hover:text-sky-500" />
              </button>
            </Tooltip>
          </div>
          <span className="text-neutral-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
            vitae quasi!{" "}
            <HoverCard>
              <Link className="text-sky-500 hover:underline" href="/username">
                @Username
              </Link>
            </HoverCard>
          </span>
          <PostActions />
        </div>
      </div>
    </div>
  );
};
