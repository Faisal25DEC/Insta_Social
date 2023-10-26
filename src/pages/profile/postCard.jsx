import { Box, Image, Square } from "@chakra-ui/react";
import React from "react";

const PostCard = ({mediaUrl}) => {
  return (
    <Square size='sm' overflow='hidden'  >
      <Image objectFit='cover' src={mediaUrl}  ></Image>      
    </Square>
  );
};

export default PostCard;
