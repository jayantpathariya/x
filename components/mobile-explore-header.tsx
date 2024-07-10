import { Search, Settings } from "lucide-react";
import Image from "next/image";

export const MobileExploreHeader = () => {
  return (
    <div className="w-full flex items-center justify-between p-3">
      <Image
        src="/profile-picture.png"
        alt="Profile Picture"
        width={40}
        height={40}
        className="rounded-full"
      />
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          className="bg-neutral-800 px-2 py-1 rounded-full pl-10 border-none outline-none focus:ring-1 ring-offset-sky-500 peer"
        />
        <Search className="absolute size-5 left-3 top-1.5 text-neutral-500 peer-focus:text-sky-500" />
      </div>
      <button>
        <Settings />
      </button>
    </div>
  );
};
