import { Settings } from "lucide-react";
import Image from "next/image";
import { Tooltip } from "../tooltip";

export const MobileNotificationsHeader = () => {
  return (
    <div className="p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-5">
          <Image
            src="/profile-picture.png"
            width={40}
            height={40}
            alt="Profile picture"
            className="rounded-full size-8 md:hidden"
          />
          <h1 className="font-bold md:text-lg">Notifications</h1>
        </div>
        <Tooltip content="settings">
          <button className="hover:bg-neutral-900 p-2 rounded-full transition-colors duration-200 ease-in-out">
            <Settings className="size-5" />
          </button>
        </Tooltip>
      </div>
    </div>
  );
};
