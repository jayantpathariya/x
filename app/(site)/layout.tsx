import { MobileNav } from "@/components/mobile-nav";
import { Sidebar } from "@/components/sidebar";
import { TrendingSidebar } from "@/components/trending-sidebar";

const SiteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-black min-h-screen text-neutral-100">
      <div className="max-w-7xl w-full mx-auto flex relative">
        <Sidebar />
        <main className="xl:ml-[280px] md:ml-[73px] max-w-[680px] w-full">
          {children}
        </main>
        <TrendingSidebar />
        <MobileNav />
      </div>
    </div>
  );
};

export default SiteLayout;
