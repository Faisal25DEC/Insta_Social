import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
  Heading,
} from "@chakra-ui/react";
import React from "react";

const NotificationDrawer = ({ isOpen, onOpen, onClose }) => {
  return (
    <Box>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Notifications</DrawerHeader>

          <DrawerBody>
            <Box>
              <Heading size={"md"}>Recent</Heading>
            </Box>
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default NotificationDrawer;
