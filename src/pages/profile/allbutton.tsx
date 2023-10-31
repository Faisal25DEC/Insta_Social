import { Button } from "@chakra-ui/react";
import React from "react";
interface FollowBtnProps {
  _id: any;
}
const loginUserFollowing: string[] = ["5", "2", "3"];
// const loginUserId: any = "1";

export const FollowButton: React.FC<FollowBtnProps> = ({ _id }) => {
  if (loginUserFollowing.includes(_id)) {
    return (
      <Button size="sm" fontSize="sm" borderColor="green.800" borderRadius="lg">
        Following
      </Button>
    );
  }
  return (
    <Button size="sm" fontSize="sm" borderColor="green.800" borderRadius="lg">
      Follow
    </Button>
  );
};

export const EditProfileButton = () => {
  return (
    <Button size="sm" fontSize="sm" borderColor="green.800" borderRadius="lg">
      Edit profile
    </Button>
  );
};
export const ViewArchiveButton = () => {
  return (
    <Button size="sm" fontSize="sm" borderColor="green.800" borderRadius="lg">
      Archive
    </Button>
  );
};
export const MessageButton = () => {
  return (
    <Button size="sm" fontSize="sm" borderColor="green.800" borderRadius="lg">
      Message
    </Button>
  );
};
