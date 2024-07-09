import * as TabsPrimitive from "@radix-ui/react-tabs";

export const ForYouTab = () => {
  return (
    <TabsPrimitive.Content
      value="you"
      className="border border-neutral-600 bg-black"
    >
      <div>For you</div>
    </TabsPrimitive.Content>
  );
};
