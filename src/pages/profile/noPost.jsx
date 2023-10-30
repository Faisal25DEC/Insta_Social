import { Box, Center, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { HiOutlineCamera } from "react-icons/hi";
import { PiCameraLight } from "react-icons/pi";

const NoPost = () => {
  return (
    <Box
      display="flex"
      alignItems={"center"}
      justifyContent={"center"}
      height={"50vh"}
      //   border="2px"
    >
      <VStack alignItems={"center"} justifyContent={"center"}>
        <Box border="1px" borderRadius="50%" padding={"10px"}>
          <PiCameraLight fontSize="3.5rem" />
        </Box>
        <Heading textAlign={"center"}  >Share Photos</Heading>

        <Text textAlign={"center"} >When you share photos, they will appear on your profile.</Text>

        <Text textAlign={"center"}  color="darkblue">Share your first photo</Text>
      </VStack>
    </Box>
  );
};

export default NoPost;
