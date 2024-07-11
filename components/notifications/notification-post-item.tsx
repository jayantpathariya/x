import { Bell } from "lucide-react";
import Image from "next/image";

export const NotificationPostItem = () => {
  return (
    <div>
      <div className="flex gap-x-3 border-b border-neutral-700 p-4 hover:bg-neutral-900/80 transition-colors duration-200 ease-in-out cursor-pointer">
        <Bell className="size-8 text-sky-500 fill-sky-500" />
        <div className="flex flex-col gap-y-2">
          <div className="flex gap-x-2">
            <Image
              src="/profile-picture.png"
              alt="Profile picture"
              width={40}
              height={40}
              className="rounded-full size-8"
            />
            <Image
              src="/profile-picture.png"
              alt="Profile picture"
              width={40}
              height={40}
              className="rounded-full size-8"
            />
            <Image
              src="/profile-picture.png"
              alt="Profile picture"
              width={40}
              height={40}
              className="rounded-full size-8"
            />
          </div>
          <p className="text-neutral-300">
            New post notifications for
            <strong> Stephen Pierce</strong> and 2 others
          </p>
        </div>
      </div>
    </div>
  );
};
