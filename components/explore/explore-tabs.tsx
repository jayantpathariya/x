"use client";

import * as Tabs from "@radix-ui/react-tabs";
import { TabTrigger } from "../tab-trigger";
import { ExploreEntertainment } from "./explore-entertainment";
import { ExploreForYou } from "./explore-for-you";
import { ExploreNews } from "./explore-news";
import { ExploreSports } from "./explore-sports";
import { ExploreTrending } from "./explore-trending";
import { MobileExploreHeader } from "./mobile-explore-header";

export const ExploreTabs = () => {
  return (
    <>
      <Tabs.Root defaultValue="for-you">
        <MobileExploreHeader />
        <Tabs.List className="bg-black w-full border-neutral-700 overflow-x-auto overflow-y-hidden">
          <div className="flex whitespace-nowrap">
            <TabTrigger value="for-you" title="For you" />
            <TabTrigger value="trending" title="Trending" />
            <TabTrigger value="news" title="News" />
            <TabTrigger value="sports" title="Sports" />
            <TabTrigger value="entertainment" title="Entertainment" />
          </div>
        </Tabs.List>
        <div className="border border-neutral-700">
          <ExploreForYou />
          <ExploreTrending />
          <ExploreSports />
          <ExploreNews />
          <ExploreEntertainment />
        </div>
      </Tabs.Root>
    </>
  );
};
