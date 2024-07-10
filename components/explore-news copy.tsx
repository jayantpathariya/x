import * as Tabs from "@radix-ui/react-tabs";
import { TrendingItem } from "./trending-item";

export const ExploreEntertainment = () => {
  return (
    <Tabs.Content value="entertainment">
      {Array.from({ length: 15 }).map((_, i) => (
        <TrendingItem key={i} />
      ))}
    </Tabs.Content>
  );
};
