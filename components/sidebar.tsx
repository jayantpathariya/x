"use client";

import { cn } from "@/libs/utils";
import {
  Bell,
  CircleEllipsis,
  House,
  Mail,
  Pen,
  Search,
  User,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./logo";

const links = [
  {
    href: "/",
    icon: House,
    label: "Home",
  },
  {
    href: "/explore",
    icon: Search,
    label: "Explore",
  },
  {
    href: "/notifications",
    icon: Bell,
    label: "Notifications",
  },
  {
    href: "/messages",
    icon: Mail,
    label: "Messages",
  },
  {
    href: "/profile",
    icon: User,
    label: "Profile",
  },
  {
    href: "/more",
    icon: CircleEllipsis,
    label: "More",
  },
];

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="bg-black p-2 fixed top-0">
      <div className="flex flex-col items-end xl:items-start">
        <Logo />
      </div>
      <nav>
        <ul className="flex flex-col items-end xl:items-start gap-y-2">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
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
          <Link
            href="/compose/post"
            className="bg-sky-500 w-fit xl:w-full p-3 rounded-full text-center font-bold hover:bg-sky-500/90 transition-colors duration-200"
          >
            <span className="hidden xl:inline-block">Post</span>
            <Pen className="size-5 xl:hidden" />
          </Link>
        </ul>
      </nav>
    </aside>
  );
};
