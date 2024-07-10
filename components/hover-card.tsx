"use client";

import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import Image from "next/image";

type Props = {
  children: React.ReactNode;
};

export const HoverCard = ({ children }: Props) => {
  return (
    <HoverCardPrimitive.Root>
      <HoverCardPrimitive.Trigger asChild>
        {children}
      </HoverCardPrimitive.Trigger>
      <HoverCardPrimitive.Portal>
        <HoverCardPrimitive.Content className="bg-black text-neutral-200 max-w-[300px] p-3 border border-neutral-700 rounded-xl shadow-lg shadow-white/20 z-20">
          <div className="flex items-start justify-between">
            <Image
              src="/profile-picture.png"
              width={50}
              height={50}
              alt="Profile picture"
              className="rounded-full size-16"
            />
            <button className="border border-neutral-700 py-1 px-3 rounded-full">
              Following
            </button>
          </div>
          <div>
            <p className="font-semibold">Lena Arnold</p>
            <p className="text-sm text-neutral-500">@jackson</p>
          </div>
          <p className="mt-2 text-sm">
            science in context, art history and some puzzles to solve
          </p>
          <div className="mt-2 flex items-center gap-x-2 text-sm text-neutral-500">
            <p>
              <span className="text-neutral-200 font-semibold">1,234 </span>
              Following
            </p>
            <p>
              <span className="text-neutral-200 font-semibold">1,234 </span>
              Followers
            </p>
          </div>
          <div>
            <div></div>
          </div>
        </HoverCardPrimitive.Content>
      </HoverCardPrimitive.Portal>
    </HoverCardPrimitive.Root>
  );
};
