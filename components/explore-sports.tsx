import * as Tabs from "@radix-ui/react-tabs";
import { TrendingItem } from "./trending-item";

export const ExploreSports = () => {
  return (
    <Tabs.Content value="sports">
      {Array.from({ length: 15 }).map((_, i) => (
        <TrendingItem key={i} />
      ))}
    </Tabs.Content>
  );
};
