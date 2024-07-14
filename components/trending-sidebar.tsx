"use client";

import { Search } from "lucide-react";
import { usePathname } from "next/navigation";
import { FollowItem } from "./follow-item";
import { SidebarBox } from "./sidebar-box";
import { TrendingItem } from "./trending-item";

export const TrendingSidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-[290px] xl:w-[350px] shrink-0 sticky top-0 h-fit hidden lg:block lg:mx-6 p-2">
      {!pathname.includes("/explore") && (
        <>
          <div className="relative">
            <input
              type="text"
              className="bg-neutral-800 w-full px-6 py-2.5 pl-12 rounded-full border-none outline-none focus:ring-1 focus:ring-sky-500 peer"
              placeholder="Search"
            />
            <Search className="absolute size-5 left-3 top-3 text-neutral-500 peer-focus-within:text-sky-500" />
          </div>
          <SidebarBox title="Subscribe to Premium">
            <div className="p-3 pt-0">
              <p className="text-sm">
                Subscribe to unlock new features and if eligible, receive a
                share of ads revenue.
              </p>
              <button className="bg-sky-500 px-4 py-1.5 rounded-full font-semibold mt-2 text-neutral-100">
                Subscribe
              </button>
            </div>
          </SidebarBox>
          <SidebarBox title="What's happening">
            <TrendingItem />
            <TrendingItem />
            <TrendingItem />
          </SidebarBox>
        </>
      )}
      <SidebarBox title="Who to follow">
        <FollowItem />
        <FollowItem />
        <FollowItem />
      </SidebarBox>
    </aside>
  );
};
