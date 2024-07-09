import * as TabsPrimitive from "@radix-ui/react-tabs";
import { NewPost } from "./new-post";

export const ForYouTab = () => {
  return (
    <TabsPrimitive.Content
      value="you"
      className="border border-neutral-600 bg-black"
    >
      <NewPost />
    </TabsPrimitive.Content>
  );
};
