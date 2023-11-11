import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

const Message = ({ message, own }) => {
  return (
    <Flex mt="1rem">
      <Flex
        width={"100%"}
        gap="1rem"
        justifyContent={own && "flex-end"}
        pr="1rem"
      >
        <Flex
          width={"50%"}
          alignItems={"center"}
          gap="1rem"
          justifyContent={own && "flex-end"}
        >
          <Avatar src={message.senderImage} />
          <Box
            display="flex"
            flexDirection={"column"}
            alignItems={own && "flex-end"}
          >
            <Text
              backgroundColor={!own ? "#e8e8e8" : "#097aeb"}
              color={own && "white"}
              p="1rem"
              borderRadius={"20px"}
            >
              {message.text}
            </Text>
            <Text>1 hour ago</Text>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Message;
