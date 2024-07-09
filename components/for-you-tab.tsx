import * as TabsPrimitive from "@radix-ui/react-tabs";
import { NewPost } from "./new-post";
import { Posts } from "./posts";
import { ShowNewPostBanner } from "./show-new-posts-banner";

export const ForYouTab = () => {
  return (
    <TabsPrimitive.Content
      value="you"
      className="border border-neutral-700 bg-black"
    >
      <NewPost />
      <ShowNewPostBanner />
      <Posts />
    </TabsPrimitive.Content>
  );
};
