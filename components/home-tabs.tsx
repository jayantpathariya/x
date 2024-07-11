import * as TabsPrimitive from "@radix-ui/react-tabs";
import { FollowingTab } from "./following-tab";
import { ForYouTab } from "./for-you-tab";
import { MobileHeader } from "./mobile-header";
import { TabTrigger } from "./tab-trigger";

export const HomeTabs = () => {
  return (
    <TabsPrimitive.Root defaultValue="for-you">
      <MobileHeader />
      <TabsPrimitive.List className="bg-black w-full border border-neutral-700 md:sticky top-0 z-10">
        <div className="grid grid-cols-2">
          <TabTrigger value="for-you" title="For you" />
          <TabTrigger value="following" title="Following" />
        </div>
      </TabsPrimitive.List>
      <ForYouTab />
      <FollowingTab />
    </TabsPrimitive.Root>
  );
};
