import { Pen } from "lucide-react";
import { NewPostDialog } from "./new-post-dialog";

export const MobilePostButton = () => {
  return (
    <NewPostDialog>
      <button className="fixed bottom-20 right-6 bg-sky-500 hover:bg-sky-500/80 p-4 rounded-full">
        <Pen />
      </button>
    </NewPostDialog>
  );
};
