import { MobileNav } from "@/components/mobile-nav";
import { MobilePostButton } from "@/components/mobile-post-button";
import { Sidebar } from "@/components/sidebar";
import { TrendingSidebar } from "@/components/trending-sidebar";

const SiteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-black min-h-screen text-neutral-100 relative">
      <div className="flex justify-center max-w-7xl mx-auto">
        <div className="flex w-full justify-center">
          <Sidebar />
          <main className="w-full md:max-w-[600px] border-x border-neutral-800">
            {children}
          </main>
          <TrendingSidebar />
        </div>
        <MobileNav />
        <MobilePostButton />
      </div>
    </div>
  );
};

export default SiteLayout;
