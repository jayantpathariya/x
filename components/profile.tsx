"use client";

import {
  Cake,
  CalendarDays,
  Ellipsis,
  Link as LinkIcon,
  Mail,
  UserPlus,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ProfileTabs } from "./profile-tabs";
import { Tooltip } from "./tooltip";

export const Profile = () => {
  return (
    <div className="border border-neutral-700">
      <div className="relative h-40 md:h-52">
        <Image
          src="https://cdn.pixabay.com/photo/2014/10/24/15/08/heaven-501350_1280.jpg"
          fill
          alt="cover image"
          className="size-full object-cover"
        />
      </div>
      <div className="p-3">
        <div className="flex justify-between">
          <div className="rounded-full p-0.5 bg-black -mt-16 md:-mt-20 z-10">
            <Image
              src="/profile-picture.png"
              width={90}
              height={90}
              alt="Profile picture"
              className="size-22 md:size-32 rounded-full"
            />
          </div>
          <div className="flex items-center gap-x-2">
            <Tooltip content="More">
              <button className="p-2 border border-neutral-700 rounded-full flex items-center justify-center hover:bg-neutral-900/80 transition-colors duration-200 ease-in-out">
                <Ellipsis />
              </button>
            </Tooltip>
            <Tooltip content="Message">
              <button className="p-2 border border-neutral-700 rounded-full flex items-center justify-center hover:bg-neutral-900/80 transition-colors duration-200 ease-in-out">
                <Mail />
              </button>
            </Tooltip>
            <Tooltip content="Subscribe to username">
              <button className="p-2 border border-neutral-700 rounded-full flex items-center justify-center hover:bg-neutral-900/80 transition-colors duration-200 ease-in-out">
                <UserPlus />
              </button>
            </Tooltip>
            <button className="bg-neutral-200 text-neutral-900 font-semibold py-1.5 px-3 rounded-full hover:bg-neutral-200/80 transition-colors duration-200 ease-in-out">
              Follow
            </button>
          </div>
        </div>
        <div className="mt-3">
          <p className="font-semibold">Virginia Farmer</p>
          <p className="text-sm text-neutral-500">@willie</p>
        </div>
        <p className="mt-3 text-neutral-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>

        <div className="flex items-center gap-x-2 flex-wrap text-sm text-neutral-500 mt-2">
          <span className="flex items-center gap-x-2">
            <LinkIcon className="size-4" />
            <Link href="google.com" target="__blank" className="text-sky-500">
              google.com
            </Link>
          </span>
          <span className="flex items-center gap-x-2">
            <Cake className="size-4" />
            Born October 24
          </span>
          <span className="flex items-center gap-x-2">
            <CalendarDays className="size-4" />
            Joined August 2021
          </span>
        </div>

        <div className="text-sm text-neutral-500 flex items-center gap-x-4 mt-3">
          <p>
            <span className="text-neutral-200 font-semibold">1.2K </span>
            Following
          </p>
          <p>
            <span className="text-neutral-200 font-semibold">1.6M </span>
            Followers
          </p>
        </div>
        <div className="text-neutral-500 text-sm flex items-center gap-x-2 mt-2">
          <div>
            <Image
              src="/profile-picture.png"
              width={20}
              height={20}
              alt="Profile picture"
              className="size-5 rounded-full"
            />
          </div>
          <div>
            <p>Followed by Elon Musk</p>
          </div>
        </div>
      </div>
      <ProfileTabs />
    </div>
  );
};
