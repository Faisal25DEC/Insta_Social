import { Box, Image, Square } from "@chakra-ui/react";
import React from "react";
interface postCardProps {
  mediaUrl:string
}
const PostCard: React.FC<postCardProps> = ({ mediaUrl }) => {
  return (
    <Box
      w="100%"
      minW={{ base: "100%" }}
     
      minH={{ base: "100px", sm: "200px", md: "300px" }}
      maxH={{ base: "100px", sm:"200px", md: "300px" }}
      overflow="hidden"
    >
      <Image
        objectFit="cover"
        minW="100%"
        w="100%"
        h="100%"
        minH={{ base: "100px", sm:"200px", md: "300px" }}
        src={mediaUrl}
      ></Image>
    </Box>
  );
};

export default PostCard;
