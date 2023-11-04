import { Box, VStack } from "@chakra-ui/react";
import React from "react";
import PlaceholderLoading from "react-placeholder-loading";

export const ProfileLoaders = () => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      gap={"2rem"}
      w="100%"
      //   border={"2px"}
    >
      <PlaceholderLoading shape="circle" width={120} height={120} />
      <VStack spacing={"2"} w="70%">
        <PlaceholderLoading shape="rect" width="100%" height={50} />
        <PlaceholderLoading shape="rect" width="100%" height={10} />
        <PlaceholderLoading shape="rect" width="100%" height={10} />
      </VStack>
    </Box>
  );
};
export const PostLoaders = () => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      gap={"2rem"}
      w="100%"
      //   border={"2px"}
    >
      <PlaceholderLoading shape="rect" width="100%" height={220} />
    </Box>
  );
};
