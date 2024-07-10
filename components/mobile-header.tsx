"use client";

import Image from "next/image";
import { useState } from "react";
import { Logo } from "./logo";
import { MobileSidebar } from "./mobile-sidebar";

export const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="md:hidden flex items-center px-3 relative">
        <button className="absolute" onClick={() => setIsOpen(true)}>
          <Image
            src="/profile-picture.png"
            alt="Profile picture"
            width={40}
            height={40}
            className="rounded-full"
          />
        </button>
        <div className="text-clip flex grow justify-center">
          <Logo />
        </div>
      </div>
      <MobileSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};
