import * as Tabs from "@radix-ui/react-tabs";
import { ExploreForYou } from "./explore-for-you";
import { ExploreNews } from "./explore-news";
import { ExploreEntertainment } from "./explore-news copy";
import { ExploreSports } from "./explore-sports";
import { ExploreTrending } from "./explore-trending";
import { MobileExploreHeader } from "./mobile-explore-header";
import { TabTrigger } from "./tab-trigger";

export const ExploreTabs = () => {
  return (
    <>
      <Tabs.Root defaultValue="for-you">
        <MobileExploreHeader />
        <Tabs.List className="bg-black w-full border border-t-0 border-neutral-700 overflow-x-auto overflow-y-hidden">
          <div className="flex whitespace-nowrap">
            <TabTrigger value="for-you" title="For you" />
            <TabTrigger value="trending" title="Trending" />
            <TabTrigger value="news" title="News" />
            <TabTrigger value="sports" title="Sports" />
            <TabTrigger value="entertainment" title="Entertainment" />
          </div>
        </Tabs.List>
        <ExploreForYou />
        <ExploreTrending />
        <ExploreSports />
        <ExploreNews />
        <ExploreEntertainment />
      </Tabs.Root>
    </>
  );
};
