import * as TabsPrimitive from "@radix-ui/react-tabs";
import { FollowingTab } from "./following-tab";
import { ForYouTab } from "./for-you-tab";

export const Tabs = () => {
  return (
    <TabsPrimitive.Root defaultValue="you">
      <TabsPrimitive.List className="bg-black w-full border border-neutral-700 sticky top-0 z-10">
        <h1 className="p-3 text-xl font-bold md:hidden">Home</h1>
        <div className="grid grid-cols-2">
          <TabsPrimitive.Trigger
            value="you"
            className="p-3 group bg-black hover:bg-neutral-900/80 transition-colors duration-200 ease-in-out"
          >
            <span className="p-3 group-data-[state='active']:border-b-4 group-data-[state='active']:border-sky-500 text-neutral-500 font-semibold group-data-[state='active']:text-neutral-100">
              For you
            </span>
          </TabsPrimitive.Trigger>
          <TabsPrimitive.Trigger
            value="following"
            className="p-3 group bg-black hover:bg-neutral-900/80 transition-colors duration-200 ease-in-out"
          >
            <span className="p-3 group-data-[state='active']:border-b-4 group-data-[state='active']:border-sky-500 text-neutral-500 font-semibold group-data-[state='active']:text-neutral-100">
              Following
            </span>
          </TabsPrimitive.Trigger>
        </div>
      </TabsPrimitive.List>
      <ForYouTab />
      <FollowingTab />
    </TabsPrimitive.Root>
  );
};
