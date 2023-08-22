"use client";

import { FC } from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useUser } from "@clerk/nextjs";

const UserAvatar: FC = () => {
  const { user } = useUser();
  return (
    <Avatar className="h-12 w-12">
      <AvatarImage src={user?.imageUrl} />
    </Avatar>
  );
};

export default UserAvatar;