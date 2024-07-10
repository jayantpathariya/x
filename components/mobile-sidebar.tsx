import { mobileSidebarLinks } from "@/libs/constants";
import { cn } from "@/libs/utils";
import { LogOut, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

export const MobileSidebar = ({ isOpen, setIsOpen }: Props) => {
  return (
    <>
      <div
        className={cn(
          "bg-black fixed top-0 left-0 z-10 h-screen w-[70%] p-3 border-r border-neutral-400 -translate-x-[100%] transition-transform duration-300 ease-in-out",
          isOpen && "translate-x-0"
        )}
      >
        <div>
          <div className="flex items-center justify-between">
            <Image
              src="/profile-picture.png"
              alt="Profile picture"
              width={40}
              height={40}
              className="rounded-full"
            />
            <button
              className="border border-neutral-700 p-1
           rounded-full hover:bg-neutral-900/80 transition-colors duration-200 ease-in-out"
            >
              <Plus />
            </button>
          </div>
          <div className="mt-2">
            <div>
              <h1 className="font-bold">Florence Mills</h1>
              <p className="text-sm text-neutral-500">@fannie</p>
            </div>
            <div className="flex mt-3 gap-x-2 text-neutral-500 text-sm">
              <p>
                <span className="text-neutral-200">234 </span>
                Following
              </p>
              <p>
                <span className="text-neutral-200">1,234 </span>
                Followers
              </p>
            </div>
          </div>
        </div>
        <div className="mt-5 flex flex-col gap-y-6">
          {mobileSidebarLinks.map((link) => (
            <Link
              href={link.href === "/profile" ? "/username" : link.href}
              key={link.href}
              className="flex items-center gap-x-3"
            >
              <link.icon className="size-7" />
              <span className="font-semibold">{link.label}</span>
            </Link>
          ))}
          <button className="w-fit flex items-center gap-x-3">
            <LogOut className="size-7" />
            <span className="font-bold">Log out</span>
          </button>
        </div>
      </div>
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="absolute inset-0 z-[5] bg-white/30"
        ></div>
      )}
    </>
  );
};
