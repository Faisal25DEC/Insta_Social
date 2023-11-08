import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
  Divider,
  Box,
  Input,
} from "@chakra-ui/react";
import { RiSettings5Line } from "react-icons/ri";
import React, { useEffect } from "react";
import UserSmallCard from "./userSmallCard";
import { dataArray } from "./data";
import { useDispatch, useSelector } from "react-redux";
import { getUserAllDetailAction } from "../../redux/search_user/search_user.action";
import { useParams } from "react-router";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

interface SettingPopUpProps {
  isSettingPopUP: boolean;
  setIsSettingPopUP: Function;
}
interface FollowerPopUpProps {
  isFollowerPopUP: boolean;
  setIsFollowerPopUP: Function;
}
interface FollowingPopUpProps {
  isFollowingPopUP: boolean;
  setIsFollowingPopUP: Function;
}
interface RootState {
  searchUserReducer: {
    // Define the structure of your reducer's state here
    searchUserDetail: any;
    searchUserFollower: any[];
    searchUserFollowing: any[];
    searchUserPosts: any[];
  };
}

interface userObj {
  _id: any;
  profileImage: string;
  userName: string;
  name: string;
  bio: string;
}
type userReducer = {
  _id: string;
};

type loginUserObject = {
  userReducer: {
    isAuth: boolean;
    error: boolean;
    login_user: userReducer;
    search_results: any[];
    login_following: any[];
  };
};
//------------------------------
export const SettingPopUp = ({
  isSettingPopUP,
  setIsSettingPopUP,
}: SettingPopUpProps) => {
  const onClose = () => setIsSettingPopUP(false);
  const onOpen = () => setIsSettingPopUP(true);

  return (
    <>
      <Text display={{ base: "none", md: "block" }}>
        <RiSettings5Line fontSize="1.5rem" onClick={onOpen} />
      </Text>

      <Modal
        blockScrollOnMount={true}
        isOpen={isSettingPopUP}
        onClose={onClose}
        isCentered
      >
        <ModalOverlay />
        <ModalContent cursor={"pointer"} maxW="96" borderRadius="2xl">
          <ModalBody paddingX="0" textAlign="center">
            <Text fontSize={"sm"} mb="0.5rem" mt="0.5rem">
              Apps and websites
            </Text>
            <Divider />
            <Text fontSize={"sm"} mb="0.5rem" mt="0.5rem">
              QR code
            </Text>
            <Divider />
            <Text fontSize={"sm"} mb="0.5rem" mt="0.5rem">
              Notification
            </Text>
            <Divider />
            <Text fontSize={"sm"} mb="0.5rem" mt="0.5rem">
              Setting and privacy
            </Text>
            <Divider />
            <Text fontSize={"sm"} mb="0.5rem" mt="0.5rem">
              Supervision
            </Text>
            <Divider />
            <Text fontSize={"sm"} mb="0.5rem" mt="0.5rem">
              Logout
            </Text>
            <Divider />
            <Text fontSize={"sm"} onClick={onClose} mb="0.5rem" mt="0.5rem">
              Cancel
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export const FollowerPopUp: React.FC<FollowerPopUpProps> = ({
  isFollowerPopUP,
  setIsFollowerPopUP,
}) => {
  const { searchUserFollower } = useSelector(
    (store: RootState) => store.searchUserReducer
  );
  const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();

  const onClose = () => setIsFollowerPopUP(false);
  const onOpen = () => setIsFollowerPopUP(true);
  const { login_user } = useSelector(
    (state: loginUserObject) => state.userReducer
  );
  const { userId } = useParams();
  const searchUserId: any = userId;

  // useEffect(() => {
  //   dispatch(getUserAllDetailAction(userId) as any);

  // },[])
  return (
    <>
      {/* <RiSettings5Line fontSize="1.5rem" onClick={onOpen} /> */}
      <Text onClick={onOpen}>{searchUserFollower?.length} follower</Text>

      <Modal
        isCentered
        blockScrollOnMount={true}
        isOpen={isFollowerPopUP}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent borderRadius="2xl">
          <ModalHeader paddingY="0.5rem" textAlign="center">
            Followers
          </ModalHeader>
          <Divider />

          <ModalCloseButton />
          <ModalBody>
            <Box mb="1.2rem">
              <Input size="sm" borderRadius="md" placeholder="Search" />
            </Box>
            <Box overflowY="scroll" maxH="260px" paddingRight="1.5rem">
              {searchUserFollower?.map((ele) => (
                <UserSmallCard key={ele._id} {...ele} onClose={onClose} />
              ))}
              {login_user._id == searchUserId ? (
                <Text mb="0.8rem" fontWeight="bold">
                  Suggested For You
                </Text>
              ) : (
                ""
              )}

              {/* <UserSmallCard text={"Follow"} />
              <UserSmallCard text={"Follow"} />
              <UserSmallCard text={"Follow"} /> */}
            </Box>
          </ModalBody>

          {/* <ModalFooter>             
             
            </ModalFooter> */}
        </ModalContent>
      </Modal>
    </>
  );
};

export const FollowingPopUp: React.FC<FollowingPopUpProps> = ({
  isFollowingPopUP,
  setIsFollowingPopUP,
}) => {
  const { searchUserFollowing } = useSelector(
    (store: RootState) => store.searchUserReducer
  );
  const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();
  const { login_user } = useSelector(
    (state: loginUserObject) => state.userReducer
  );
  const onClose = () => setIsFollowingPopUP(false);
  const onOpen = () => setIsFollowingPopUP(true);
  const { userId } = useParams();
  const searchUserId: any = userId;
  return (
    <>
      {/* <RiSettings5Line fontSize="1.5rem" onClick={onOpen} /> */}
      <Text onClick={onOpen}>{searchUserFollowing?.length} following</Text>

      <Modal
        isCentered
        blockScrollOnMount={true}
        isOpen={isFollowingPopUP}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent borderRadius="2xl">
          <ModalHeader paddingY="0.5rem" textAlign="center">
            Following
          </ModalHeader>
          <Divider />

          <ModalCloseButton />
          <ModalBody>
            <Box mb="1.2rem">
              <Input size="sm" borderRadius="md" placeholder="Search" />
            </Box>
            <Box overflowY="scroll" maxH="260px" paddingRight="1.5rem">
              {searchUserFollowing?.map((ele) => (
                <UserSmallCard key={ele._id} {...ele} onClose={onClose} />
              ))}
              {login_user._id == searchUserId ? (
                <Text mb="0.8rem" fontWeight="bold">
                  Suggested For You
                </Text>
              ) : (
                ""
              )}
            </Box>
          </ModalBody>

          {/* <ModalFooter>             
             
            </ModalFooter> */}
        </ModalContent>
      </Modal>
    </>
  );
};
