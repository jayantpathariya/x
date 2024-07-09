import { Search } from "lucide-react";
import { FollowItem } from "./follow-item";
import { SidebarBox } from "./sidebar-box";
import { TrendingItem } from "./trending-item";

export const TrendingSidebar = () => {
  return (
    <aside className="p-2 min-w-[350px] hidden xl:block sticky z-10 top-0 bg-black h-fit">
      <div className="relative">
        <input
          type="text"
          className="bg-neutral-800 w-full px-6 py-2.5 pl-12 rounded-full border-none outline-none focus:ring-1 focus:ring-sky-500 peer"
          placeholder="Search"
        />
        <Search className="absolute size-5 left-3 top-3 text-neutral-500 peer-focus-within:text-sky-500" />
      </div>
      <SidebarBox title="What's happening">
        <TrendingItem />
        <TrendingItem />
        <TrendingItem />
      </SidebarBox>
      <SidebarBox title="Who to follow">
        <FollowItem />
        <FollowItem />
        <FollowItem />
      </SidebarBox>
    </aside>
  );
};
