import * as TabsPrimitive from "@radix-ui/react-tabs";
import { NewPost } from "../new-post";
import { Posts } from "../posts";

export const FollowingTab = () => {
  return (
    <TabsPrimitive.Content
      value="following"
      className="border border-neutral-700 bg-black"
    >
      <NewPost />
      <Posts />
    </TabsPrimitive.Content>
  );
};
