import * as Dialog from "@radix-ui/react-dialog";
import {
  ArrowLeft,
  Earth,
  ImageIcon,
  ImagePlay,
  ListTodo,
  MapPin,
  Smile,
  X,
} from "lucide-react";
import Image from "next/image";
import { Tooltip } from "./tooltip";

export const NewPostDialog = ({ children }: { children: React.ReactNode }) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-white/10 z-20" />
        <Dialog.Content className="bg-black max-w-[600px] fixed inset-0 md:top-10 md:left-1/2 md:-translate-x-1/2 z-30 text-neutral-200 p-4 md:rounded-2xl md:h-fit">
          <div className="border-b border-neutral-700 pb-4 ">
            <div className="flex items-center justify-between">
              <Dialog.Close asChild className="md:hidden md:invisible">
                <button>
                  <ArrowLeft className="size-5" />
                </button>
              </Dialog.Close>
              <Dialog.Close
                asChild
                className="hidden invisible md:inline-block md:visible"
              >
                <button>
                  <X className="size-5" />
                </button>
              </Dialog.Close>
              <div className="flex items-center gap-x-4">
                <button className="text-sky-500 hover:bg-sky-500/20 px-4 py-1 rounded-full transition-colors duration-200 ease-in-out font-semibold">
                  Drafts
                </button>
                <button className="bg-sky-500 px-4 py-1 rounded-full font-semibold disabled:opacity-50  disabled:cursor-not-allowed md:hidden md:invisible">
                  Post
                </button>
              </div>
            </div>
            <div>
              <div className="flex items-start gap-x-2 mt-4">
                <Image
                  src="/profile-picture.png"
                  alt="Profile Picture"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <textarea
                  placeholder="What is happening?!"
                  rows={3}
                  className="w-full outline-none border-none resize-none p-2 text-lg bg-transparent"
                ></textarea>
              </div>
              <button className="flex items-center gap-x-2 mt-2 text-sm text-sky-500">
                <Earth className="size-4" />
                <span>Everyone can reply</span>
              </button>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-x-1">
              <Tooltip content="Media">
                <button className="hover:bg-sky-500/20 p-2 rounded-full">
                  <ImageIcon className="text-sky-500 size-5" />
                </button>
              </Tooltip>
              <Tooltip content="GIF">
                <button className="hover:bg-sky-500/20 p-2 rounded-full">
                  <ImagePlay className="text-sky-500 size-5" />
                </button>
              </Tooltip>
              <Tooltip content="Location">
                <button className="hover:bg-sky-500/20 p-2 rounded-full">
                  <ListTodo className="text-sky-500 size-5" />
                </button>
              </Tooltip>
              <Tooltip content="Emoji">
                <button className="hover:bg-sky-500/20 p-2 rounded-full">
                  <Smile className="text-sky-500 size-5" />
                </button>
              </Tooltip>
              <Tooltip content="Location">
                <button className="hover:bg-sky-500/20 p-2 rounded-full">
                  <MapPin className="text-sky-500 size-5" />
                </button>
              </Tooltip>
            </div>
            <button className="bg-sky-500 hover:bg-sky-500/80 transition-colors duration-200 ease-in-out  px-4 py-1 rounded-full disabled:opacity-50 disabled:cursor-not-allowed hidden invisible md:inline-block md:visible font-semibold">
              Post
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
