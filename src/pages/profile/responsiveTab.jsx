import { Box, Center, Flex, Spacer, Text,Link } from "@chakra-ui/react";
import React from "react";
// import { Link } from "react-router-dom";
import { MdGridOn } from "react-icons/md";
import { BiBookmark } from "react-icons/bi";
import { BiUserPin } from "react-icons/bi";
import PostGrid from "./postGrid";
import NoPost from "./noPost";
const ResponsiveTab = () => {
  return (
    <Box display={{base:"block",md:"none" }} width={"100%"} >
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
          <Link href={`/profile/follower/1`} display="flex" justifyContent="center" alignItems="center" flexDirection="column" >
            <Text>255</Text> <Text>Followers</Text>{" "}
          </Link>
        </Center>

        <Spacer />

        <Center w="33%" display="flex" flexDirection="column">
          <Link display="flex" justifyContent="center" alignItems="center" flexDirection="column" href={`/profile/following/1`}>
            <Text>125</Text> <Text>Following</Text>{" "}
          </Link>
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
      {/* <PostGrid /> */}
      <NoPost/>

    </Box>
  );
};

export default ResponsiveTab;
