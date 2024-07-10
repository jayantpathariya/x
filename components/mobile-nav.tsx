"use client";

import { mobileLinks } from "@/libs/constants";
import { cn } from "@/libs/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const MobileNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(isScrolled);

  return (
    <nav
      className={cn(
        "fixed bottom-0 bg-black w-full p-4 flex justify-between",
        isScrolled && "opacity-40"
      )}
    >
      {mobileLinks.map((link) => {
        return (
          <Link key={link.href} href={link.href}>
            <link.icon
              className={cn(
                "size-7 text-neutral-500",
                pathname.includes(link.href) && "text-neutral-200"
              )}
            />
          </Link>
        );
      })}
    </nav>
  );
};
