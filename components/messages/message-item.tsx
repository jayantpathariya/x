import { Ellipsis } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const MessageItem = () => {
  return (
    <Link
      href="/messages/1429076224756916228"
      className="flex items-center gap-x-2 p-3 bg-black hover:bg-neutral-900 transition-colors duration-200 ease-in-out"
    >
      <Image
        src="/profile-picture.png"
        alt="profile picture"
        width={40}
        height={40}
        className="rounded-full size-10"
      />
      <div>
        <div className="flex items-center gap-x-2 text-sm text-neutral-500">
          <span className="line-clamp-1 font-semibold text-neutral-200">
            Kate Stephens
          </span>
          <span>@steve</span>
          <span>•</span>
          <span>Feb 1,2023</span>
        </div>

        <p className="line-clamp-1 text-neutral-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <button>
        <Ellipsis className="size-5 text-neutral-500" />
      </button>
    </Link>
  );
};
