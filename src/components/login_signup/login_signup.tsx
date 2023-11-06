import {
  Box,
  Center,
  Container,
  Flex,
  Image,
  Spacer,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import AuthForm from "./authform";

const Login = () => {
  return (
    <Flex
      minH={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
      px={4}
      m={"auto"}
    >
      <Container m={"auto"} maxW={"container.md"} padding={0}>
        <Flex justifyContent={"center"} alignItems={"center"} gap={10}>
          <Box display={{ base: "none", md: "block" }}>
            <Image
              src="https://res.cloudinary.com/dusavcufz/image/upload/v1698315948/vc2vzyb2oncrhbkxl1tp.png"
              h={650}
              alt="Phone img"
            />
          </Box>

          <VStack spacing={4} align={"stretch"}>
            <AuthForm />
            <Box textAlign={"center"}>Get the app.</Box>
            <Flex gap={5} justifyContent={"center"}>
              <Image
                src="https://res.cloudinary.com/dusavcufz/image/upload/v1698469824/htr94q2gr7onlrneivwl.png"
                h={10}
                alt="Playstore logo"
              />
              <Image
                src="https://res.cloudinary.com/dusavcufz/image/upload/v1698470259/n8jfb1wl1qg188ydqlab.png"
                h={10}
                alt="Microsoft logo"
              />
            </Flex>
          </VStack>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Login;
