import { Box, Center, Flex, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import { MdGridOn } from "react-icons/md";
import { BiBookmark } from "react-icons/bi";
import { BiUserPin } from "react-icons/bi";
import PostGrid from "./postGrid";
const ResponsiveTab = () => {
  return (
    <>
      <Flex
        borderY="1px solid grey"
        marginTop="2rem"
        display={{ base: "flex", md: "none" }}
        w="100%"
      >
        <Center w="33%" display="flex" flexDirection="column">
          {" "}
          <Text>1200</Text> <Text>post</Text>{" "}
        </Center>
        <Spacer />
        <Center w="33%" display="flex" flexDirection="column">
          {" "}
          <Text>255</Text> <Text>Followers</Text>{" "}
        </Center>
        <Spacer />
        <Center w="33%" display="flex" flexDirection="column">
          {" "}
          <Text>125</Text> <Text>Following</Text>{" "}
        </Center>
      </Flex>
      <Flex display={{ base: "flex", md: "none" }} w="100%">
        <Center w="33%" display="flex" flexDirection="column">
          {" "}
          <MdGridOn color="Blue" fontSize="1.5rem" />
        </Center>
        <Spacer />
        <Center w="33%" display="flex" flexDirection="column">
          {" "}
          <BiBookmark color="Blue" fontSize="1.5rem" />
        </Center>
        <Spacer />
        <Center w="33%" display="flex" flexDirection="column">
          {" "}
          <BiUserPin color="Blue" fontSize="1.5rem" />
        </Center>
      </Flex>
      <PostGrid />
    </>
  );
};

export default ResponsiveTab;
