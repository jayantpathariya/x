import { ArrowLeft } from "lucide-react";

export const PostDetailHeader = () => {
  return (
    <div className="flex items-center gap-x-8 p-4">
      <button>
        <ArrowLeft className="size-5" />
      </button>
      <h1 className="font-bold">Post</h1>
    </div>
  );
};
