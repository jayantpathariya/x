import { ArrowLeft } from "lucide-react";

export const ProfileHeader = () => {
  return (
    <div className="bg-black/70 py-1 px-2 flex items-center gap-x-8 fixed top-0 left-0 w-full z-10 text-neutral-200 md:hidden">
      <button>
        <ArrowLeft />
      </button>
      <div>
        <p className="font-semibold">John Doe</p>
        <span className="text-sm text-neutral-500">1.2K posts</span>
      </div>
    </div>
  );
};
