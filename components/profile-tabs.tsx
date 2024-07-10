"use client";

import * as Tabs from "@radix-ui/react-tabs";
import { Posts } from "./posts";
import { ProfileMediaGallery } from "./profile-media-gallery";
import { TabTrigger } from "./tab-trigger";

export const ProfileTabs = () => {
  return (
    <Tabs.Root defaultValue="posts">
      <Tabs.List className="bg-black w-full border border-t-0 border-neutral-700 overflow-x-auto overflow-y-hidden">
        <div className="flex whitespace-nowrap md:grid grid-cols-5">
          <TabTrigger value="posts" title="Posts" />
          <TabTrigger value="replies" title="Replies" />
          <TabTrigger value="subs" title="Subs" />
          <TabTrigger value="highlights" title="Highlights" />
          <TabTrigger value="media" title="Media" />
        </div>
      </Tabs.List>
      <Tabs.Content value="posts">
        <Posts />
      </Tabs.Content>
      <Tabs.Content value="replies">
        <Posts />
      </Tabs.Content>
      <Tabs.Content value="subs" className="p-5">
        <h2 className="font-extrabold text-2xl">
          Unlock more with Subscriptions
        </h2>
        <p className="mt-2 text-neutral-500">
          @willie has shared 44 Subscriber-only posts. Subscribe to see their
          exclusive posts and bonus content.
        </p>
      </Tabs.Content>
      <Tabs.Content value="highlights">
        <Posts />
      </Tabs.Content>
      <Tabs.Content value="media">
        <ProfileMediaGallery />
      </Tabs.Content>
    </Tabs.Root>
  );
};
