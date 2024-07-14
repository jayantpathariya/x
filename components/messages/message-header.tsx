import { MailPlus, Settings } from "lucide-react";
import Image from "next/image";
import { Tooltip } from "../tooltip";

export const MessageHeader = () => {
  return (
    <div className="bg-black flex items-center justify-between p-3">
      <div className="flex items-center gap-x-6">
        <Image
          src="/profile-picture.png"
          alt="profile picture"
          width={40}
          height={40}
          className="rounded-full size-8 md:hidden"
        />
        <h2 className="font-semibold  md:text-xl">Messages</h2>
      </div>
      <div className="flex items-center gap-x-2">
        <Tooltip content="Settings">
          <button className="hover:bg-neutral-900 p-2 rounded-full">
            <Settings className="size-5" />
          </button>
        </Tooltip>
        <Tooltip content="New message">
          <button className="hover:bg-neutral-900 p-2 rounded-full">
            <MailPlus className="size-5" />
          </button>
        </Tooltip>
      </div>
    </div>
  );
};
