import React, { useEffect, useState } from "react";
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
import { useSelector } from "react-redux";
import { ProfileLoaders } from "./loaders";
interface ProfileCardProps {
  isSameUser: boolean;
  onOpen: any;
}
interface RouteParams {
  userId: any;
}
interface userObj {
  _id: any;
  profileImage: string;
  userName: string;
  name: string;
  bio: string;
}
interface RootState {
  searchUserReducer: {
    // Define the structure of your reducer's state here
    isAllLoading: boolean;
    searchUserDetail: any;
    searchUserFollower: any[];
    searchUserFollowing: any[];
    searchUserPosts: any[];
  };
}

const ProfileCard = ({ isSameUser, onOpen }: ProfileCardProps) => {
  const { userId: searchUserId } = useParams();
  // const [isProfileLoading,setIsProfileLoading] = useState(false)

  // const searchUserId: any = userId;

  const {
    isOpen: isOpen1,
    onOpen: onOpen1,
    onClose: onClose1,
  } = useDisclosure();
  const [isSettingPopUP, setIsSettingPopUP] = useState(false);
  const [isFollowerPopUP, setIsFollowerPopUP] = useState(false);
  const [isFollowingPopUP, setIsFollowingPopUP] = useState(false);
  const { searchUserDetail, searchUserPosts, isAllLoading } = useSelector(
    (store: RootState) => store.searchUserReducer
  );
  const { profileImage, userName, name, bio } = searchUserDetail;
  useEffect(() => {
    setIsSettingPopUP(false);
    setIsFollowerPopUP(false);
    setIsFollowingPopUP(false);
  }, []);
  return (
    <>
      {isAllLoading ? (
        <ProfileLoaders />
      ) : (
        <Flex justifyContent="space-between" w="100%" alignItems="center">
          <Box p={{ lg: "20px", base: "0px" }}>
            <Box
              maxW="180px"
              minW={{ base: "60px", sm: "80px", md: "100px", lg: "150px" }}
              w="15%"
            >
              <Image
                borderRadius="full"
                height="10rem"
                width="10rem"
                objectFit={"cover"}
                src={profileImage}
              ></Image>
            </Box>
          </Box>

          <Spacer />

          <VStack
            w={{ lg: "70%", base: "90%" }}
            align="flex-start"
            spacing={{ base: "5px", md: "15px", lg: "15px" }}
          >
            <Box
              cursor="pointer"
              display="flex"
              flexDirection={{ base: "column", lg: "row" }}
              rowGap={"2"}
              columnGap={"3"}
              alignItems={{ base: "start", lg: "center" }}
              // justifyContent={'start'}
            >
              <Text>{userName}</Text>
              <Box display="flex" gap="3" alignItems="center">
                {isSameUser ? (
                  <EditProfileButton onOpen={onOpen}  />
                ) : (
                  <FollowButton _id={searchUserId} />
                )}
                  {isSameUser ? <ViewArchiveButton /> : <MessageButton _id={ searchUserId} />}

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
              <Text>{searchUserPosts && searchUserPosts?.length} posts </Text>
              <FollowerPopUp
                isFollowerPopUP={isFollowerPopUP}
                setIsFollowerPopUP={setIsFollowerPopUP}
              />
              <FollowingPopUp
                isFollowingPopUP={isFollowingPopUP}
                setIsFollowingPopUP={setIsFollowingPopUP}
              />
            </HStack>

            <VStack align={"start"} spacing={"0"}>
              <Text fontSize={"sm"}>{name}</Text>
              <Text fontSize={"sm"}>{bio}</Text>
            </VStack>
          </VStack>
        </Flex>
      )}
    </>
  );
};

export default ProfileCard;
