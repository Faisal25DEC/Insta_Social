import { Box, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import PostCard from "./postCard";
import { useSelector } from "react-redux";
interface RootState {
  searchUserReducer: {
    // Define the structure of your reducer's state here
    searchUserDetail: any;
    searchUserFollower: any[];
    searchUserFollowing: any[];
    searchUserPosts: any[];
  };
}

const PostGrid = () => {
  const { searchUserPosts } = useSelector(
    (store: RootState) => store.searchUserReducer
  );
  return (
    <Grid
      templateColumns="repeat(3, 1fr)"
      gap={2}
      w="100%"
      maxW="100%"
      overflow={"hidden"}
    >
      {" "}
      {searchUserPosts.map((ele) => (
        <GridItem key={ele._id} >
          <PostCard  mediaUrl={ele.mediaUrl} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default PostGrid;
