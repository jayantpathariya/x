import { cn } from "@/libs/utils";

interface Message {
  messages: string[];
  timestamp: string;
}

export const SenderMessage = ({ messages, timestamp }: Message) => (
  <div className="flex justify-end">
    <div className="flex flex-col items-end">
      <div className="flex flex-col gap-y-2">
        {messages.map((message, index) => (
          <div
            key={index}
            className={cn(
              "bg-sky-500 text-white rounded-2xl py-3 px-4 max-w-xs lg:max-w-md",
              index === messages.length - 1 && "rounded-br-none"
            )}
          >
            <p>{message}</p>
          </div>
        ))}
      </div>
      <span className="text-xs text-neutral-500 block mt-2">{timestamp}</span>
    </div>
  </div>
);
