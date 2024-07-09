import { Sidebar } from "@/components/sidebar";
import { TrendingSidebar } from "@/components/trending-sidebar";

const SiteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-black min-h-screen text-neutral-100">
      <div className="max-w-7xl mx-auto flex items-stretch">
        <Sidebar />
        <main className="xl:ml-[280px] ml-[73px] max-w-[680px]">
          {children}
        </main>
        <TrendingSidebar />
      </div>
    </div>
  );
};

export default SiteLayout;
