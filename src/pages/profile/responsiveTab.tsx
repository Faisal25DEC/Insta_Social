import { Box, Center, Flex, Spacer, Text, Link } from "@chakra-ui/react";
import React from "react";
// import { Link } from "react-router-dom";
import { MdGridOn } from "react-icons/md";
import { BiBookmark } from "react-icons/bi";
import { BiUserPin } from "react-icons/bi";
import PostGrid from "./postGrid";
import NoPost from "./noPost";
import { useSelector } from "react-redux";
type RootState = {
  searchUserReducer: {
    // Define the structure of your reducer's state here
    searchUserDetail: any;
    searchUserFollower: any[];
    searchUserFollowing: any[];
    searchUserPosts: any[];
  };
};
const ResponsiveTab = () => {
  const { searchUserPosts,searchUserFollower,searchUserFollowing } = useSelector(
    (store: RootState) => store.searchUserReducer
  );
  return (
    <Box display={{ base: "block", md: "none" }} width={"100%"}>
      <Flex
        borderY="1px solid grey"
        marginTop="2rem"
        display={{ base: "flex", md: "none" }}
        w="100%"
      >
        <Center w="33%" display="flex" flexDirection="column">
          {" "}
          <Text fontSize="sm" >{searchUserPosts.length}</Text>
          <Text fontSize="sm" >post</Text>{" "}
        </Center>
        <Spacer />
        <Center w="33%" display="flex" flexDirection="column">
          {" "}
          <Link
            href={`/profile/follower/1`}
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Text fontSize="sm">{searchUserFollower.length }</Text>
            <Text fontSize="sm" >Followers</Text>{" "}
          </Link>
        </Center>

        <Spacer />

        <Center w="33%" display="flex" flexDirection="column">
          <Link
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            href={`/profile/following/1`}
          >
            <Text fontSize="sm" >{searchUserFollowing.length}</Text>
            <Text fontSize="sm" > Following</Text>{" "}
          </Link>
        </Center>
      </Flex>
      <Flex display={{ base: "flex", md: "none" }} w="100%">
        <Center
          paddingY="5px"
          w="33%"
          borderTop="1px"
          display="flex"
          flexDirection="column"
        >
          {" "}
          <MdGridOn color="skyBlue" fontSize="1.5rem" />
        </Center>
        <Spacer />
        <Center w="33%" display="flex" flexDirection="column">
          {" "}
          <BiBookmark color="skyBlue" fontSize="1.5rem" />
        </Center>
        <Spacer />
        <Center w="33%" display="flex" flexDirection="column">
          {" "}
          <BiUserPin color="skyBlue" fontSize="1.5rem" />
        </Center>
      </Flex>
      <Box
      // border="2px"
      >
        {searchUserPosts.length == 0 ? <NoPost /> : <PostGrid />}
      </Box>
    </Box>
  );
};

export default ResponsiveTab;
