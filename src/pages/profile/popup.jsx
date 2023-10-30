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
} from "@chakra-ui/react";
import { RiSettings5Line } from "react-icons/ri";
import React from "react";

const SettingPopUp = ({ isSettingPopUP, setIsSettingPopUP }) => {
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

export default SettingPopUp;
