import { Box, Grid, GridItem } from "@chakra-ui/react";
import React, { useState } from "react";
import PostCard from "./postCard";
import { useSelector } from "react-redux";
import { NoPost } from "./noPost";
import { PostLoaders } from "./loaders";
interface RootState {
  searchUserReducer: {
    // Define the structure of your reducer's state here
    isAllLoading: boolean;
    searchUserDetail: any;
    searchUserFollower: any[];
    searchUserFollowing: any[];
    searchUserPosts: any[];
  };
}

const PostGrid = ({
  isSameUser,
  onOpen,
}: {
  isSameUser: boolean;
  onOpen?: () => void;
}) => {
  // const [isPostLoading, setIsPostLoading] = useState(false);

  const { searchUserPosts, isAllLoading } = useSelector(
    (store: RootState) => store.searchUserReducer
  );
  if (isAllLoading) {
    return (
      <Grid
        templateColumns="repeat(3, 1fr)"
        gap={2}
        w="100%"
        maxW="100%"
        overflow={"hidden"}
      >
        {/* <NoPost /> */}
        <PostLoaders />
        <PostLoaders />
        <PostLoaders />
        <PostLoaders />
        <PostLoaders />
        <PostLoaders />
        <PostLoaders />
        <PostLoaders />
        <PostLoaders />
      </Grid>
    );
  }
  if (searchUserPosts?.length == 0) {
    return <NoPost isSameUser={isSameUser} onOpen={onOpen} />;
  }

  return (
    <Grid
      templateColumns="repeat(3, 1fr)"
      gap={2}
      w="100%"
      maxW="100%"
      overflow={"hidden"}
    >
      {" "}
      {searchUserPosts?.map((ele) => (
        <GridItem key={ele._id}>
          <PostCard {...ele} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default PostGrid;
