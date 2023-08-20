"use client";

import ChatHeader from "@/components/chat-header";
import { Companion, Message } from "@prisma/client";
import { FC } from "react";

interface chatClientProps {
  companion: Companion & {
    messages: Message[];
    _count: {
      messages: number;
    };
  };
}

const ChatClient: FC<chatClientProps> = ({ companion }) => {
  return (
    <div className="flex flex-col h-full p-4 space-y-2">
      <ChatHeader companion={companion} />
    </div>
  );
};

export default ChatClient;
