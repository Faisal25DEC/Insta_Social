import { Box, Image, Square, useDisclosure } from "@chakra-ui/react";
import React from "react";
import PostModal from "./postModal";
interface postCardProps {
  mediaUrl: string;
  author: string;
  authorImage: string;
  caption: string;
  _id: string;
}
const PostCard: React.FC<postCardProps> = ({
  mediaUrl,
  author,
  authorImage,
  caption,
  _id,
}) => {
  const { onOpen, onClose, isOpen } = useDisclosure();

  return (
    <Box
      onClick={onOpen}
      w="100%"
      // minW={{ base: "100%" }}

      minH={{ base: "80px", sm: "200px", md: "300px" }}
      maxH={{ base: "80px", sm: "200px", md: "300px" }}
      overflow="hidden"
      display={"flex"}
      alignItems={"center"}
    >
      <Image
        objectFit="cover"
        // minW="100%"
        w="100%"
        h="100%"
        minH={{ base: "80px", sm: "200px", md: "300px" }}
        src={mediaUrl}
      ></Image>
      <PostModal
        onOpen={onOpen}
        onClose={onClose}
        isOpen={isOpen}
        mediaUrl={mediaUrl}
        _id={_id}
        author={author}
        authorImage={authorImage}
        caption={caption}
      />
    </Box>
  );
};

export default PostCard;
