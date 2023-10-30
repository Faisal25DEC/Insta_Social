import React from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Image,
  Spacer,
  Text,
  VStack,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  Heading,
  Divider,
} from "@chakra-ui/react";
import PopUp from "./popup";
import UserSmallCard from "./userSmallCard";
const ProfileCard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex justifyContent="space-between" w="100%" alignItems="center">
      <Box p={{ lg: "20px", base: "0px" }}>
        <Box maxW="180px" minW={{ base: "80px", md:"100px", lg: "150px" }} w="15%">
          <Image
            borderRadius="50%"
            src="https://i.ibb.co/rp3V5Kd/358768461-3390909287831163-5567728346172820606-n.jpg"
          ></Image>
        </Box>
      </Box>

      <Spacer />

      <VStack w={{ lg: "70%", base: "90%" }} align="flex-start" spacing="20px">
        <Box
          cursor="pointer"
          display="flex"
          flexDirection={{ base: "column", lg: "row" }}
          gap="3"
        >
          <Text>arjundangi8349</Text>
          <Box display="flex" gap="3">
            <Button
              size="sm"
              fontSize="sm"
              borderColor="green.800"
              borderRadius="lg"
            >
              Edit Profile
            </Button>
            <Button
              size="sm"
              fontSize="sm"
              borderColor="green.800"
              borderRadius="lg"
            >
              View Article
            </Button>
          </Box>
        </Box>

        <HStack display={{base:"none",md:"flex"}} cursor="pointer" spacing="24px">
          <Text>0 posts </Text>
          <Text onClick={onOpen}>1 follower</Text>
          <Text onClick={onOpen}>2 following</Text>
        </HStack>

        <VStack>
          <Text>Arjun Dangi</Text>
        </VStack>
      </VStack>
      {/* <PopUp onOpen={onOpen} /> */}
      <Modal
        isCentered
        blockScrollOnMount={true}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent borderRadius="2xl">
          <ModalHeader paddingY="0.5rem" textAlign="center">Followers</ModalHeader>
          <Divider />

          <ModalCloseButton />
          <ModalBody>
            <Box mb="1.2rem">
              <Input size="sm" borderRadius="md" placeholder="Search" />
            </Box>
            <Box overflowY="scroll" maxH="260px" paddingRight="1.5rem">
              <UserSmallCard text={"Remove"} />
              <Text mb="0.8rem" fontWeight="bold">
                Suggested For You
              </Text>
              <UserSmallCard text={"Follow"} />
              <UserSmallCard text={"Follow"} />
              <UserSmallCard text={"Follow"} />
              <UserSmallCard text={"Follow"} />
              <UserSmallCard text={"Follow"} />
            </Box>
          </ModalBody>

          {/* <ModalFooter>             
             
            </ModalFooter> */}
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default ProfileCard;
