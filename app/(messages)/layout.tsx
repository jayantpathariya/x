import { MessagesContent } from "@/components/messages/messages-content";
import { Sidebar } from "@/components/sidebar";

const MessageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-black min-h-screen text-neutral-100 relative">
      <div className="flex justify-center max-w-7xl mx-auto">
        <div className="flex w-full justify-center">
          <Sidebar />
          <div className="hidden md:block">
            <MessagesContent />
          </div>
          <main className="w-full md:max-w-[560px] border-x border-neutral-800">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default MessageLayout;
