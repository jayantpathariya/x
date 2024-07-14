import { ArrowLeft, CircleAlert } from "lucide-react";
import Image from "next/image";

export const ChatHeader = () => {
  return (
    <div className="flex justify-between items-center p-3 sticky top-0 left-0">
      <div className="flex items-center gap-x-6">
        <button className="md:hidden">
          <ArrowLeft className="size-5" />
        </button>
        <div className="flex items-center gap-x-2">
          <Image
            src="/profile-picture.png"
            alt="Profile Picture"
            width={40}
            height={40}
            className="size-8 rounded-full"
          />
          <p className="font-semibold">Derrick Robinson</p>
        </div>
      </div>
      <button>
        <CircleAlert className="size-5" />
      </button>
    </div>
  );
};
