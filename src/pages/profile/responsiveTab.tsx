import { Box, Center, Flex, Spacer, Text, Link } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
// import { Link } from "react-router-dom";
import { MdGridOn } from "react-icons/md";
import { BiBookmark } from "react-icons/bi";
import { BiUserPin } from "react-icons/bi";
import PostGrid from "./postGrid";
import { NoPost, NoTagged } from "./noPost";
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
interface porps {
  isSameUser: boolean;
}
const ResponsiveTab = ({ isSameUser }: porps) => {
  const {
    searchUserPosts,
    searchUserFollower,
    searchUserFollowing,
    searchUserDetail,
  } = useSelector((store: RootState) => store.searchUserReducer);

  const [tabState, setTabState] = useState("posts");
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
          <Text fontSize="sm">{searchUserPosts?.length}</Text>
          <Text fontSize="sm">post</Text>{" "}
        </Center>
        <Spacer />
        <Center w="33%" display="flex" flexDirection="column">
          {" "}
          <Link
            as={ReactRouterLink}
            to={`/profile/follower/${searchUserDetail._id}`}
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Text fontSize="sm">{searchUserFollower?.length}</Text>
            <Text fontSize="sm">Followers</Text>{" "}
          </Link>
        </Center>

        <Spacer />

        <Center w="33%" display="flex" flexDirection="column">
          <Link
            as={ReactRouterLink}
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            to={`/profile/following/${searchUserDetail._id}`}
          >
            <Text fontSize="sm">{searchUserFollowing?.length}</Text>
            <Text fontSize="sm"> Following</Text>{" "}
          </Link>
        </Center>
      </Flex>
      <Flex display={{ base: "flex", md: "none" }} w="100%">
        <Center
          paddingY="5px"
          w="33%"
          borderTop={tabState == "posts" ? "1px" : "0px"}
          display="flex"
          flexDirection="column"
        >
          {" "}
          <MdGridOn
            onClick={() => setTabState("posts")}
            color={tabState == "posts" ? "skyBlue" : "black"}
            fontSize="1.5rem"
          />
        </Center>
        <Spacer />

        <Center
          w="33%"
          display="flex"
          borderTop={tabState == "saved" ? "1px" : "0px"}
          flexDirection="column"
        >
          {" "}
          <BiBookmark
            onClick={() => setTabState("saved")}
            color={tabState == "saved" ? "skyBlue" : "black"}
            fontSize="1.5rem"
          />
        </Center>
        <Spacer />
        <Center
          w="33%"
          borderTop={tabState == "tagged" ? "1px" : "0px"}
          display="flex"
          flexDirection="column"
        >
          {" "}
          <BiUserPin
            onClick={() => setTabState("tagged")}
            color={tabState == "tagged" ? "skyBlue" : "black"}
            fontSize="1.5rem"
          />
        </Center>
      </Flex>
      <Box
      // border="2px"
      >
        {tabState === "posts" && <PostGrid isSameUser={isSameUser} />}
        {tabState === "saved" && <NoPost isSameUser={isSameUser} />}
        {tabState === "tagged" && <NoTagged isSameUser={isSameUser} />}
      </Box>
    </Box>
  );
};

export default ResponsiveTab;
