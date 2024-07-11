import { User } from "lucide-react";
import Image from "next/image";

export const NotificationFollowItem = () => {
  return (
    <div>
      <div className="flex gap-x-3 p-4">
        <User className="size-7 text-sky-500 fill-sky-500" />
        <div className="flex flex-col gap-y-2">
          <div className="flex gap-x-2">
            <Image
              src="/profile-picture.png"
              alt="Profile picture"
              width={40}
              height={40}
              className="rounded-full size-8"
            />
          </div>
          <p className="text-neutral-300">
            <strong>Thomas Barrett</strong> followed you
          </p>
        </div>
      </div>
    </div>
  );
};
