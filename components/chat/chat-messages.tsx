import { ReceiverMessage } from "./receiver-message";
import { SenderMessage } from "./sender-message";

interface Message {
  type: "user" | "friend";
  messages: string[];
  timestamp: string;
}

const conversation: Message[] = [
  {
    type: "user",
    messages: ["Hey there! How's it going?"],
    timestamp: "Oct 22, 2022, 10:29 PM",
  },
  {
    type: "friend",
    messages: ["Hi! I'm doing well, thanks for asking.", "How about you?"],
    timestamp: "Oct 22, 2022, 10:30 PM",
  },
  {
    type: "user",
    messages: [
      "I'm great! Just finished a big project at work.",
      "It was quite challenging but rewarding.",
    ],
    timestamp: "Oct 22, 2022, 10:32 PM",
  },
  {
    type: "friend",
    messages: [
      "That's awesome! Congratulations on completing it.",
      "What was the project about?",
    ],
    timestamp: "Oct 22, 2022, 10:33 PM",
  },
  {
    type: "user",
    messages: [
      "It was a new feature for our app.",
      "We implemented a real-time chat system, kind of like this one!",
    ],
    timestamp: "Oct 22, 2022, 10:35 PM",
  },
  {
    type: "friend",
    messages: [
      "Wow, that sounds interesting!",
      "I'd love to hear more about the technical challenges you faced.",
    ],
    timestamp: "Oct 22, 2022, 10:36 PM",
  },
  {
    type: "user",
    messages: [
      "Sure! The main challenge was handling concurrent users.",
      "We had to optimize our database queries and use WebSockets for real-time updates.",
    ],
    timestamp: "Oct 22, 2022, 10:38 PM",
  },
  {
    type: "friend",
    messages: [
      "That's impressive!",
      "How many concurrent users can your system handle now?",
    ],
    timestamp: "Oct 22, 2022, 10:39 PM",
  },
  {
    type: "user",
    messages: [
      "We've tested it with up to 10,000 simultaneous users.",
      "It's holding up well so far!",
    ],
    timestamp: "Oct 22, 2022, 10:41 PM",
  },
  {
    type: "friend",
    messages: [
      "That's a great achievement!",
      "Your team must be proud.",
      "Are you planning any celebrations?",
    ],
    timestamp: "Oct 22, 2022, 10:42 PM",
  },
];

export const ChatMessages = () => {
  return (
    <div className="flex flex-col space-y-4 p-2 pt-4">
      {conversation.map((item, index) =>
        item.type === "user" ? (
          <SenderMessage
            key={index}
            messages={item.messages}
            timestamp={item.timestamp}
          />
        ) : (
          <ReceiverMessage
            key={index}
            messages={item.messages}
            timestamp={item.timestamp}
          />
        )
      )}
    </div>
  );
};
