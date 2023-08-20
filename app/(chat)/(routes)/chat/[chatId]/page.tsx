import { db } from "@/lib/prismadb";
import { auth, redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { FC } from "react";
import ChatClient from "./components/client";

interface chatIdPageProps {
  params: {
    chatId: string;
  };
}

const ChatIdPage: FC<chatIdPageProps> = async ({ params }) => {
  const { userId } = auth();
  if (!userId) {
    return redirectToSignIn();
  }

  const companion = await db.companion.findUnique({
    where: {
      id: params.chatId,
    },
    include: {
      messages: {
        orderBy: {
          createdAt: "asc",
        },
        where: {
          userId,
        },
      },
      _count: {
        select: {
          messages: true,
        },
      },
    },
  });

  if (!companion) {
    return redirect("/");
  }
  return <ChatClient companion={companion} />;
};

export default ChatIdPage;
