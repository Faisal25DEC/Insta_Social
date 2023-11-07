import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Spacer,
  Text,
  Link,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
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
        <Link
        to={`/profile/${_id}`}
          as={ReactRouterLink}>
          <Image
            src={profileImage}
            w="2.5rem"
            maxH="2.5rem"
            borderRadius="50%"
          ></Image>
        </Link>

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
