import Image from "next/image";
import Link from "next/link";
import { HoverCard } from "./hover-card";

export const FollowItem = () => {
  return (
    <div className="flex items-center justify-between p-3 hover:bg-neutral-900/30 w-full">
      <div className="flex items-center gap-x-2">
        <Image
          src="/profile-picture.png"
          alt="Profile picture"
          width={40}
          height={40}
          className="rounded-full"
        />
        <div className="flex flex-col items-start">
          <HoverCard>
            <Link
              href="/profile"
              className="text-sm text-neutral-200 font-semibold hover:underline"
            >
              Dustin Willis
            </Link>
          </HoverCard>
          <span className="text-sm text-neutral-500">@carlos</span>
        </div>
      </div>
      <button className="bg-neutral-100 text-neutral-900 font-bold py-1 px-2 rounded-full text-sm hover:bg-neutral-100/80 transition-colors duration-200 ease-in-out">
        Follow
      </button>
    </div>
  );
};
