import { Box, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import PostCard from "./postCard";

const PostGrid = () => {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={2} w="100%" minW='786px' >
      {/* <GridItem rowSpan={1} colSpan={1} bg="tomato" /> */}
      <PostCard mediaUrl="https://i.ibb.co/yVGmDXT/380544489-666178575467267-8696379913885629238-n.jpg" />
      <PostCard mediaUrl="https://i.ibb.co/RznqVDY/387685173-850450063406427-8598788894496499848-n.jpg" />
      <PostCard mediaUrl="https://i.ibb.co/RznqVDY/387685173-850450063406427-8598788894496499848-n.jpg" />
      <PostCard mediaUrl="https://i.ibb.co/RznqVDY/387685173-850450063406427-8598788894496499848-n.jpg" />
      <PostCard mediaUrl="https://i.ibb.co/RznqVDY/387685173-850450063406427-8598788894496499848-n.jpg" />
      <PostCard mediaUrl="https://i.ibb.co/RznqVDY/387685173-850450063406427-8598788894496499848-n.jpg" />
      <PostCard mediaUrl="https://i.ibb.co/PMNs7Kn/383564732-280869784755038-4744856478724335887-n.jpg" />
      <PostCard mediaUrl="https://i.ibb.co/M6yq2c7/393644712-292159127040639-6450214194359258963-n.jpg" />
      <PostCard mediaUrl="https://i.ibb.co/FDHq9WY/391171324-1107216023984286-1475657335680589516-n.jpg" />
      <PostCard mediaUrl="https://i.ibb.co/FDHq9WY/391171324-1107216023984286-1475657335680589516-n.jpg" />
      <PostCard mediaUrl="https://i.ibb.co/FDHq9WY/391171324-1107216023984286-1475657335680589516-n.jpg" />
    </Grid>
  );
};

export default PostGrid;
