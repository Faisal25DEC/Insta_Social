import {
  Avatar,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
  Input,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Tooltip,
  useDisclosure,
  Divider,
  Center,
  FocusLock,
} from "@chakra-ui/react";
import "./nav.css";
import { Link as RouterLink } from "react-router-dom";
import {
  CreatePostLogo,
  ExploreLogo,
  InstagramLogo,
  InstagramMobileLogo,
  Loggin,
  MoreLogo,
  NotificationsLogo,
  SearchLogo,
} from "../../assets/constants";

import { AiFillHome } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import React, { useRef, useState } from "react";
import NotificationDrawer from "../notificationDrawer/notificationDrawer";
import CreatePost from "./../create-post/create-post";

const Sidebar = () => {
  const {
    isOpen: isOpen2,
    onClose: onClose2,
    onOpen: onOpen2,
  } = useDisclosure();
  const {
    isOpen: isOpen1,
    onClose: onClose1,
    onOpen: onOpen1,
  } = useDisclosure();
  const [drawerIconClicked, setDrawerIconClicked] = useState(false);
  const [state, setState] = useState(true);
  const [sbar, setSbar] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [animate, setAnimate] = useState(false);

  const toggleAnimation = () => {
    setAnimate(!animate);
  };
  const sidebarItems = [
    {
      icon: <AiFillHome size={25} />,
      text: "Home",
      link: "/",
    },
    {
      icon: <SearchLogo />,
      text: "Search",
    },

    {
      icon: <NotificationsLogo />,
      text: "Notifications",
    },
    {
      icon: <CreatePostLogo />,
      text: "Create",
    },
    {
      icon: <ExploreLogo />,
      text: "Explore",
    },
  ];

  return (
    <Box
      height={"100vh"}
      borderRight={"1px solid"}
      borderColor={"whiteAlpha.300"}
      py={8}
      position={"fixed"}
      top={0}
      left={0}
      px={{ base: 2, md: 4 }}
    >
      <Drawer
        size={"sm"}
        boxShadow="xs"
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>
            <Flex flexDirection={"row"}>
              <Flex
                border="1px solid #d3d3d3"
                w={"60px"}
                h={"full"}
                p={"0"}
                m={"0"}
                borderColor={"white #d3d3d3 white white"}
              >
                <Flex>
                  <Flex direction={"column"} gap={10} w="full" height={"full"}>
                    <Link
                      to={"/"}
                      as={RouterLink}
                      p={2}
                      mt={"15px"}
                      borderRadius={6}
                      _hover={{
                        bg: "whiteAlpha.200",
                      }}
                      w={10}
                      cursor="pointer"
                    >
                      <InstagramMobileLogo />
                    </Link>

                    <Flex direction={"column"} gap={5} cursor={"pointer"}>
                      {sidebarItems.map((item, index) => (
                        <Tooltip
                          key={index}
                          hasArrow
                          label={item.text}
                          placement="right"
                          openDelay={500}
                          display={{ base: "block", md: "none" }}
                        >
                          <Link
                            display={"flex"}
                            to={item.link || ""}
                            as={RouterLink}
                            alignItems={"center"}
                            gap={4}
                            _hover={{ bg: "whiteAlpha.400" }}
                            borderRadius={6}
                            p={2}
                            backgroundColor={
                              drawerIconClicked === item.text && "#c0c4c1"
                            }
                            w={{ base: 10, md: "full" }}
                            onClick={() => {
                              setDrawerIconClicked("");
                              item.text == "Search" && onClose();
                            }}
                            justifyContent={{
                              base: "center",
                              md: "flex-start",
                            }}
                          >
                            {item.icon}
                          </Link>
                        </Tooltip>
                      ))}
                    </Flex>
                    <Tooltip
                      hasArrow
                      label={"Logout"}
                      placement="right"
                      ml={1}
                      openDelay={500}
                      display={{ base: "block", md: "none" }}
                    >
                      <Link
                        display={"flex"}
                        to={"/auth"}
                        as={RouterLink}
                        alignItems={"center"}
                        gap={4}
                        _hover={{ bg: "whiteAlpha.400" }}
                        borderRadius={6}
                        p={2}
                        w={{ base: 10, md: "full" }}
                        mt={"240px"}
                        ml={"5px"}
                        justifyContent={{ base: "center", md: "flex-start" }}
                      >
                        {state ? <BiLogOut size={25} /> : <Loggin />}
                      </Link>
                    </Tooltip>
                    <Tooltip
                      hasArrow
                      label={"More"}
                      placement="right"
                      openDelay={500}
                      display={{ base: "block", md: "none" }}
                    >
                      <Link
                        display={"flex"}
                        alignItems={"center"}
                        gap={4}
                        _hover={{ bg: "whiteAlpha.400" }}
                        borderRadius={6}
                        w={{ base: 10, md: "full" }}
                        mt={"auto"}
                        justifyContent={{ base: "center", md: "flex-start" }}
                      >
                        <Menu>
                          <MenuButton
                            as={Button}
                            transition="all 0.2s"
                            bg={"white"}
                            _hover={{ bg: "white" }}
                            _expanded={{ bg: "white" }}
                          >
                            <MoreLogo />
                          </MenuButton>
                          <MenuList>
                            <MenuItem>Download</MenuItem>
                            <MenuItem>Create a Copy</MenuItem>
                            <MenuItem>Mark as Draft</MenuItem>
                            <MenuItem>Delete</MenuItem>
                            <MenuItem>Attend a Workshop</MenuItem>
                          </MenuList>
                        </Menu>
                      </Link>
                    </Tooltip>
                  </Flex>
                </Flex>

                <Flex></Flex>
              </Flex>

              <Flex flexDirection={"column"} w={"500px"}>
                <Text ml={"20px"} mt="15px" fontSize={"25px"}>
                  Search
                </Text>
                <FocusLock returnFocus persistentFocus={true}>
                  <Input
                    focusBorderColor="#d3d3d3"
                    width={"340px"}
                    _focus={true}
                    mt="28px"
                    ml="15px"
                    variant="filled"
                    placeholder="Search"
                  />
                </FocusLock>
                <Divider
                  mt="15px"
                  w="360px"
                  css={{
                    backgroundColor: "gray",
                    height: ".5px",
                  }}
                />
              </Flex>
            </Flex>
          </DrawerBody>
        </DrawerContent>

        {/* end */}
      </Drawer>

      <Flex
        direction={"column"}
        gap={10}
        w="full"
        height={"full"}
        className="drawer-backwards"
        pr="1rem"
        borderRight={"solid 1px grey"}
      >
        <Link
          to={"/"}
          as={RouterLink}
          pl={2}
          display={{ base: "none", md: "block" }}
          cursor="pointer"
        >
          <InstagramLogo />
        </Link>
        <Link
          to={"/"}
          as={RouterLink}
          p={2}
          display={{ base: "block", md: "none" }}
          borderRadius={6}
          _hover={{
            bg: "whiteAlpha.200",
          }}
          w={10}
          cursor="pointer"
        >
          <InstagramMobileLogo />
        </Link>

        <Flex direction={"column"} gap={5} cursor={"pointer"}>
          {sidebarItems.map((item, index) => (
            <Tooltip
              key={index}
              hasArrow
              label={item.text}
              placement="right"
              ml={1}
              openDelay={500}
              display={{ base: "block", md: "none" }}
            >
              <Link
                display={"flex"}
                to={item.link || ""}
                as={RouterLink}
                alignItems={"center"}
                gap={4}
                _hover={{ bg: "whiteAlpha.400" }}
                borderRadius={6}
                p={2}
                ref={btnRef}
                w={{ base: 10, md: "full" }}
                onClick={() => {
                  toggleAnimation();
                  setDrawerIconClicked(item.text);
                  setTimeout(() => {
                    item.text === "Create" && onOpen2();
                    item.text === "Search" && onOpen();
                    item.text === "Notifications" && onOpen1();
                  }, 100);
                }}
                justifyContent={{ base: "center", md: "flex-start" }}
              >
                {item.icon}
                <Box display={{ base: "none", md: "block" }}>{item.text}</Box>
              </Link>
            </Tooltip>
          ))}
        </Flex>
        <Tooltip
          hasArrow
          label={"Logout"}
          placement="right"
          ml={1}
          openDelay={500}
          display={{ base: "block", md: "none" }}
        >
          <Link
            display={"flex"}
            to={"/auth"}
            as={RouterLink}
            alignItems={"center"}
            gap={4}
            _hover={{ bg: "whiteAlpha.400" }}
            borderRadius={6}
            p={2}
            w={{ base: 10, md: "full" }}
            mt={60}
            justifyContent={{ base: "center", md: "flex-start" }}
          >
            {state ? (
              <>
                <BiLogOut size={25} />
                <Box display={{ base: "none", md: "block" }}>Logout</Box>
              </>
            ) : (
              <>
                <Loggin />
                <Box display={{ base: "none", md: "block" }}>Login</Box>
              </>
            )}
          </Link>
        </Tooltip>
        <Tooltip
          hasArrow
          label={"More"}
          placement="right"
          ml={1}
          openDelay={500}
          display={{ base: "block", md: "none" }}
        >
          <Link
            display={"flex"}
            alignItems={"center"}
            gap={4}
            _hover={{ bg: "whiteAlpha.400" }}
            borderRadius={6}
            p={2}
            w={{ base: 10, md: "full" }}
            mt={"auto"}
            justifyContent={{ base: "center", md: "flex-start" }}
          >
            <Menu>
              <MenuButton as={Button} transition="all 0.2s">
                More
              </MenuButton>
              <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
              </MenuList>
            </Menu>
          </Link>
        </Tooltip>
      </Flex>
      <NotificationDrawer
        isOpen={isOpen1}
        onClose={onClose1}
        onOpen={onOpen1}
      />
      <CreatePost isOpen={isOpen2} onClose={onClose2} onOpen={onOpen2} />
    </Box>
  );
};

export default Sidebar;
