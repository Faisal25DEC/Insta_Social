import { Box, Center, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { HiOutlineCamera } from "react-icons/hi";
import { PiCameraLight } from "react-icons/pi";

export const NoPost = () => {
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
        <Heading textAlign={"center"}>Share Photos</Heading>

        <Text textAlign={"center"}>
          When you share photos, they will appear on your profile.
        </Text>

        <Text textAlign={"center"} color="darkblue">
          Share your first photo
        </Text>
      </VStack>
    </Box>
  );
};
export const NoSaved = () => {
  return (
    <Box
      display="flex"
      paddingY={"1rem"}
      // alignItems={"center"}
      // justifyContent={"center"}
      rowGap={"4rem"}
      height={"50vh"}
      flexDirection={"column"}
      // border="2px"
      // w="100%"
    >
      <HStack justify="space-between">
        <Text fontSize={"sm"}>Only you can see what you've saved</Text>
        <Text color={"#1b98f6"} fontSize={"sm"}>
          + New Collection
        </Text>
      </HStack>
      <VStack  alignItems={"center"} justifyContent={"center"}>
        <Box border="1px" borderRadius="50%" padding={"10px"}>
          <PiCameraLight fontSize="3.5rem" />
        </Box>
        <Heading textAlign={"center"}>Save</Heading>

        <Text fontSize={"sm"} textAlign={"center"}>
          Save photos and videos that you want to see again. No one is notified,
          and only you can see what you've saved.
        </Text>
      </VStack>
    </Box>
  );
};
