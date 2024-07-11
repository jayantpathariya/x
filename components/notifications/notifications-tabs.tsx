import { TabTrigger } from "@/components/tab-trigger";
import * as Tabs from "@radix-ui/react-tabs";
import { NotificationFollowItem } from "./notification-follow-item";
import { NotificationKLikeItem } from "./notification-like-item";
import { NotificationMentionItem } from "./notification-mention-item";
import { NotificationPostItem } from "./notification-post-item";

export const NotificationsTabs = () => {
  return (
    <Tabs.Root defaultValue="all">
      <Tabs.List className="grid grid-cols-3 border-b border-neutral-700">
        <TabTrigger value="all" title="All" />
        <TabTrigger value="verified" title="Verified" />
        <TabTrigger value="mentions" title="Mentions" />
      </Tabs.List>
      <Tabs.Content value="all" className="flex flex-col gap-y-2">
        <NotificationPostItem />
        <NotificationFollowItem />
        <NotificationKLikeItem />
      </Tabs.Content>
      <Tabs.Content value="verified" className="flex flex-col gap-y-2">
        <NotificationPostItem />
      </Tabs.Content>
      <Tabs.Content value="mentions" className="flex flex-col gap-y-2">
        <NotificationMentionItem />
        <NotificationMentionItem />
      </Tabs.Content>
    </Tabs.Root>
  );
};
