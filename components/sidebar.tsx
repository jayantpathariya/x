"use client";

import { cn } from "@/libs/utils";

import { links } from "@/libs/constants";
import { Pen } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./logo";
import { NewPostDialog } from "./new-post-dialog";

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    // <aside className="bg-black p-2 fixed top-0 hidden md:block">
    <aside className="p-2 w-[68px] xl:w-[275px] shrink-0 sticky top-0 h-screen hidden md:block">
      <div className="flex flex-col items-end xl:items-start">
        <Logo />
      </div>
      <nav>
        <ul className="flex flex-col items-end xl:items-start gap-y-2">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href === "/profile" ? "/username" : link.href}
                className={cn(
                  "flex items-center justify-center xl:justify-start gap-x-4 hover:bg-neutral-800 p-3 xl:p-3 rounded-full transition-colors duration-200 text-neutral-400 relative",
                  pathname.includes(link.href) && "text-neutral-100"
                )}
              >
                <link.icon className="size-7" />
                {link.href === "/notifications" && (
                  <span
                    className={cn(
                      link.href === "/notifications" &&
                        "size-5 bg-sky-500 absolute top-1.5 right-2.5 xl:left-6 xl:top-1.5 rounded-full flex items-center justify-center text-neutral-100"
                    )}
                  >
                    2
                  </span>
                )}
                <span className="font-bold font-lg hidden xl:inline-block">
                  {link.label}
                </span>
              </Link>
            </li>
          ))}
          <NewPostDialog>
            <button className="bg-sky-500 w-fit xl:w-full p-3 rounded-full text-center font-bold hover:bg-sky-500/90 transition-colors duration-200">
              <span className="hidden xl:inline-block">Post</span>
              <Pen className="size-5 xl:hidden" />
            </button>
          </NewPostDialog>
        </ul>
      </nav>
    </aside>
  );
};
