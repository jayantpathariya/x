"use client";

import { Bell, CircleEllipsis, House, Mail, Search, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "./libs/utils";
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
    <aside className="p-3">
      <div>
        <Logo />
      </div>
      <nav>
        <ul className="flex flex-col gap-y-2">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "flex items-center justify-center xl:justify-start gap-x-4 hover:bg-neutral-800 p-3 xl:p-3 rounded-full transition-colors duration-200 text-neutral-400",
                  pathname.includes(link.href) && "text-neutral-100"
                )}
              >
                <link.icon className="size-7" />
                <span className="font-bold font-lg hidden xl:inline-block">
                  {link.label}
                </span>
              </Link>
            </li>
          ))}
          <Link
            href="/compose/post"
            className="bg-sky-500 py-3 px-6 rounded-full text-center font-bold hover:bg-sky-500/90 transition-colors duration-200"
          >
            Post
          </Link>
        </ul>
      </nav>
    </aside>
  );
};
