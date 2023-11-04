import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import UserSmallCard from "../profile/userSmallCard";
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

const Following = () => {
  const { searchUserFollower, searchUserFollowing } = useSelector(
    (store: RootState) => store.searchUserReducer
  );
  return (
    <Flex w="100%">
      <Box></Box>
      <Box w="100%" paddingX="4" paddingY="4">
        {searchUserFollowing.map((ele) => (
          <UserSmallCard key={ele._id} {...ele} />
        ))}
      </Box>
    </Flex>
  );
};

export default Following;
