import { Box, Button, Flex, HStack, Image, Spacer, Text } from "@chakra-ui/react";
import React from "react";
interface UserSmallCardProps {
  text:string
}
const UserSmallCard:React.FC<UserSmallCardProps> = ({ text }) => {
  return (
    <Flex mb="1rem">
      <HStack align="center" >
        <Image
          src="https://i.ibb.co/rp3V5Kd/358768461-3390909287831163-5567728346172820606-n.jpg"
          w="2.5rem"
          maxH="2.5rem"
          borderRadius="50%"
        ></Image>
        <Box>
          <Text fontWeight="bold"  fontSize="sm" >salman_khan</Text>
          <Text fontSize="sm">being salman Khan</Text>
        </Box>
      </HStack>
      <Spacer />
      <Box minW="80px">
        <Button colorScheme='blue' size="sm" w="100%">
          {text}
        </Button>
      </Box>
    </Flex>
  );
};

export default UserSmallCard;
