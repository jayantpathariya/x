import { ChatContentHeader } from "./chat-content-header";
import { ChatMessages } from "./chat-messages";

export const ChatContent = () => {
  return (
    <div className="bg-black p-3">
      <ChatContentHeader />
      <ChatMessages />
    </div>
  );
};
