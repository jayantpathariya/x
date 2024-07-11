import { Heart } from "lucide-react";
import Image from "next/image";

export const NotificationKLikeItem = () => {
  return (
    <div>
      <div className="flex gap-x-3 p-4 hover:bg-neutral-900/80 transition-colors duration-200 ease-in-out cursor-pointer">
        <Heart className="size-7 text-rose-500 fill-rose-500" />
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
            <strong>Thomas Barrett</strong> liked your post
          </p>
        </div>
      </div>
    </div>
  );
};
