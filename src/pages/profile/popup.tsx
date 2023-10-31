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
import React from "react";
import UserSmallCard from "./userSmallCard";

interface SettingPopUpProps{
  isSettingPopUP: boolean,
  setIsSettingPopUP:Function
}
interface FollowerPopUpProps{
  isFollowerPopUP: boolean,
  setIsFollowerPopUP:Function
}
interface FollowingPopUpProps{
  isFollowingPopUP: boolean,
  setIsFollowingPopUP:Function
}
export const SettingPopUp: React.FC<SettingPopUpProps> = ({ isSettingPopUP, setIsSettingPopUP }) => {
  const onClose = () => setIsSettingPopUP(false);
  const onOpen = () => setIsSettingPopUP(true);

  return (
    <>
      <RiSettings5Line fontSize="1.5rem" onClick={onOpen} />
      <Modal
        blockScrollOnMount={true}
        isOpen={isSettingPopUP}
        onClose={onClose}
        isCentered
      >
        <ModalOverlay />
        <ModalContent  cursor={"pointer"} maxW="96" borderRadius="2xl">
          <ModalBody paddingX="0" textAlign="center">
            <Text fontSize={"sm"} mb="0.5rem" mt="0.5rem">
              Apps and websites
            </Text>
            <Divider />
            <Text  fontSize={"sm"}  mb="0.5rem" mt="0.5rem">
              QR code
            </Text>
            <Divider />
            <Text fontSize={"sm"}  mb="0.5rem" mt="0.5rem">
              Notification
            </Text>
            <Divider />
            <Text  fontSize={"sm"} mb="0.5rem" mt="0.5rem">
              Setting and privacy
            </Text>
            <Divider />
            <Text  fontSize={"sm"} mb="0.5rem" mt="0.5rem">
              Supervision
            </Text>
            <Divider />
            <Text fontSize={"sm"}  mb="0.5rem" mt="0.5rem">
              Logout
            </Text>
            <Divider />
            <Text fontSize={"sm"}  onClick={onClose} mb="0.5rem" mt="0.5rem">
              Cancel
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export const FollowerPopUp: React.FC<FollowerPopUpProps> = ({ isFollowerPopUP, setIsFollowerPopUP }) => {
  const onClose = () => setIsFollowerPopUP(false);
  const onOpen = () => setIsFollowerPopUP(true);

  return (
    <>
      {/* <RiSettings5Line fontSize="1.5rem" onClick={onOpen} /> */}
      <Text onClick={onOpen}>1 follower</Text>
      
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
    </>
  );
};
export const FollowingPopUp: React.FC<FollowingPopUpProps> = ({ isFollowingPopUP, setIsFollowingPopUP }) => {
  const onClose = () => setIsFollowingPopUP(false);
  const onOpen = () => setIsFollowingPopUP(true);

  return (
    <>
      {/* <RiSettings5Line fontSize="1.5rem" onClick={onOpen} /> */}
      <Text onClick={onOpen}>1 following</Text>
      
      <Modal
          isCentered
          blockScrollOnMount={true}
          isOpen={isFollowingPopUP}
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
    </>
  );
};


