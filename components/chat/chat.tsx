import { ChatContent } from "./chat-content";
import { ChatHeader } from "./chat-header";

export const Chat = () => {
  return (
    <div className="bg-black w-full">
      <ChatHeader />
      <ChatContent />
    </div>
  );
};
