import * as Tabs from "@radix-ui/react-tabs";
import { TrendingItem } from "../trending-item";

export const ExploreTrending = () => {
  return (
    <Tabs.Content value="trending">
      <div className="flex flex-col gap-y-2">
        {Array.from({ length: 15 }).map((_, i) => (
          <TrendingItem key={i} />
        ))}
      </div>
    </Tabs.Content>
  );
};
