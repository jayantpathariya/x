"use client";

import { ArrowLeft, Search } from "lucide-react";
import { useState } from "react";
import { MessageItem } from "./message-item";

export const MessagesContent = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="bg-black">
      <div className="flex items-center gap-x-2 mb-2 p-3">
        {isSearchOpen && (
          <button onClick={() => setIsSearchOpen(false)}>
            <ArrowLeft className="size-5" />
          </button>
        )}
        <div className="relative w-full" onClick={() => setIsSearchOpen(true)}>
          <Search className="absolute top-3 left-3 size-4 text-neutral-500" />
          <input
            type="text"
            placeholder="Search Direct Messages"
            onBlur={() => setIsSearchOpen(false)}
            className="px-4 py-2 pl-8 w-full bg-black rounded-full outline-none border border-neutral-700 placeholder:text-neutral-500 focus:ring-2 focus:ring-sky-500"
          />
        </div>
      </div>
      <MessageItem />
      <MessageItem />
      <MessageItem />
    </div>
  );
};
