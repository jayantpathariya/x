import { Sidebar } from "@/components/sidebar";

const SiteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-black min-h-screen text-neutral-100">
      <div className="max-w-7xl mx-auto flex">
        <Sidebar />
        {children}
      </div>
    </div>
  );
};

export default SiteLayout;
