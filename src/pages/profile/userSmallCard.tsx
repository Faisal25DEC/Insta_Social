import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FollowButton } from "./allbutton";
interface UserSmallCardProps {
  text: string;
}
interface userObj {
  _id: any;
  profileImage: string;
  userName: string;
  name: string;
  bio: string;
}
const UserSmallCard: React.FC<userObj> = ({
  _id,
  profileImage,
  userName,
  name,
  bio,
}) => {
  return (
    <Flex mb="1rem">
      <HStack align="center">
        <Image
          src="https://i.ibb.co/rp3V5Kd/358768461-3390909287831163-5567728346172820606-n.jpg"
          w="2.5rem"
          maxH="2.5rem"
          borderRadius="50%"
        ></Image>
        <Box>
          <Text fontWeight="bold" fontSize="sm">
            {name}
          </Text>
          <Text fontSize="sm">{userName}</Text>
        </Box>
      </HStack>
      <Spacer />
      <Box minW="80px">
        <FollowButton key={_id} _id={_id} />
      
      </Box>
    </Flex>
  );
};

export default UserSmallCard;
