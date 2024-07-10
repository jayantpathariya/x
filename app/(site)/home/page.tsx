import { HomeTabs } from "@/components/home-tabs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "(2) Home",
};

const HomePage = () => {
  return (
    <>
      <HomeTabs />
    </>
  );
};

export default HomePage;
