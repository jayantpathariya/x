import * as TabsPrimitive from "@radix-ui/react-tabs";
import { NewPost } from "./new-post";
import { ShowNewPostBanner } from "./show-new-posts-banner";

export const ForYouTab = () => {
  return (
    <TabsPrimitive.Content
      value="you"
      className="border border-neutral-600 bg-black"
    >
      <NewPost />
      <ShowNewPostBanner />
    </TabsPrimitive.Content>
  );
};
