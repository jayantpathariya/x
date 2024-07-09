import * as TabsPrimitive from "@radix-ui/react-tabs";
import { NewPost } from "./new-post";

export const FollowingTab = () => {
  return (
    <TabsPrimitive.Content
      value="following"
      className="border border-neutral-700 bg-black"
    >
      <NewPost />
    </TabsPrimitive.Content>
  );
};
