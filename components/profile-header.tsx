import { ArrowLeft } from "lucide-react";

export const ProfileHeader = () => {
  return (
    <div className="bg-black/50 p-3 flex items-center gap-x-8">
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
