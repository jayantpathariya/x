import { Settings } from "lucide-react";
import Image from "next/image";

export const MessageHeader = () => {
  return (
    <div className="bg-black flex items-center justify-between p-3">
      <div className="flex items-center gap-x-6">
        <Image
          src="/profile-picture.png"
          alt="profile picture"
          width={40}
          height={40}
          className="rounded-full size-8"
        />
        <h2 className="font-semibold">Messages</h2>
      </div>
      <button>
        <Settings />
      </button>
    </div>
  );
};
