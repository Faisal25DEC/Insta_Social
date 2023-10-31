import React, { useState } from "react";
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
import UserSmallCard from "./userSmallCard";
import { FollowerPopUp, FollowingPopUp, SettingPopUp } from "./popup";
import {
  EditProfileButton,
  FollowButton,
  MessageButton,
  ViewArchiveButton,
} from "./allbutton";
import { useParams } from "react-router-dom";
interface ProfileCardProps {
  isSameUser: boolean;
}
interface RouteParams {
  userId: any;
}
const ProfileCard: React.FC<ProfileCardProps> = ({ isSameUser }) => {
  const { userId: searchUserId } = useParams();
  // const searchUserId: any = userId;

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSettingPopUP, setIsSettingPopUP] = useState(false);
  const [isFollowerPopUP, setIsFollowerPopUP] = useState(false);
  const [isFollowingPopUP, setIsFollowingPopUP] = useState(false);

  return (
    <>
      <Flex justifyContent="space-between" w="100%" alignItems="center">
        <Box p={{ lg: "20px", base: "0px" }}>
          <Box
            maxW="180px"
            minW={{ base: "80px", md: "100px", lg: "150px" }}
            w="15%"
          >
            <Image
              borderRadius="50%"
              src="https://i.ibb.co/rp3V5Kd/358768461-3390909287831163-5567728346172820606-n.jpg"
            ></Image>
          </Box>
        </Box>

        <Spacer />

        <VStack
          w={{ lg: "70%", base: "90%" }}
          align="flex-start"
          spacing="20px"
        >
          <Box
            cursor="pointer"
            display="flex"
            flexDirection={{ base: "column", lg: "row" }}
            gap="3"
          >
            <Text>arjundangi8349</Text>
            <Box display="flex" gap="3" alignItems="center">
              {isSameUser ? (
                <EditProfileButton />
              ) : (
                <FollowButton _id={searchUserId} />
              )}
              {isSameUser ? <ViewArchiveButton /> : <MessageButton />}

              {isSameUser ? (
                <SettingPopUp
                  isSettingPopUP={isSettingPopUP}
                  setIsSettingPopUP={setIsSettingPopUP}
                />
              ) : (
                ""
              )}
            </Box>
          </Box>

          <HStack
            display={{ base: "none", md: "flex" }}
            cursor="pointer"
            spacing="24px"
          >
            <Text>0 posts </Text>
            <FollowerPopUp
              isFollowerPopUP={isFollowerPopUP}
              setIsFollowerPopUP={setIsFollowerPopUP}
            />
            <FollowingPopUp
              isFollowingPopUP={isFollowingPopUP}
              setIsFollowingPopUP={setIsFollowingPopUP}
            />
          </HStack>

          <VStack>
            <Text>Arjun Dangi</Text>
          </VStack>
        </VStack>
      </Flex>
    </>
  );
};

export default ProfileCard;
