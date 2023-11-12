import {
  Box,
  Button,
  Flex,
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Text,
  Input,
  Avatar,
  Image,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import Conversation from "../../components/conversation/Conversations";
import MessageTop from "../../components/messageTop/MessageTop";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { localBaseUrl } from "../../redux/util";
import { io } from "socket.io-client";
import { searching } from "../../redux/user/userAction";
import ConversationIcon from "../../assets/conversation.png";

const Messages = () => {
  const { onOpen, isOpen, onClose } = useDisclosure();
  const { login_user, search_results } = useSelector(
    (state) => state.userReducer
  );
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [arrivalMessage, setArrivalMessage] = useState({});
  const socket = useRef();
  const dispatch = useDispatch();

  let time_id;

  const OnSearch = (value) => {
    if (time_id) {
      clearTimeout(time_id);
    }
    time_id = setTimeout(() => {
      dispatch(searching(value));
    }, 500);
  };

  const createConversation = async (receiverId) => {
    try {
      const res = await axios.post(`${localBaseUrl}/conversations`, {
        senderId: login_user._id,
        receiverId,
      });
      setConversations((prev) => [...prev, res.data]);
      setCurrentChat(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    socket.current = io("ws://instagram-backend-2-production.up.railway.app");
    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        senderImage: data.senderImage,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    arrivalMessage && currentChat?.members.includes(arrivalMessage.sender);
    setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    socket.current.emit("addUser", login_user._id);
  }, [login_user]);

  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get(
          `${localBaseUrl}/conversations/${login_user?._id}`
        );
        setConversations(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();
  }, [login_user]);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get(
          `${localBaseUrl}/messages/${currentChat?._id}`
        );
        setMessages(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();
  }, [currentChat]);

  return (
    <Flex h={"100vh"} w="85%" marginLeft={"auto"}>
      <Box flex={"3.5"} borderRight={"solid 1px gray"} pt="5%" h="20vh">
        <Flex
          justifyContent={"space-between"}
          borderBottom={"solid 1px gray"}
          p={"0rem 2rem"}
          alignItems={"center"}
        >
          <Box pb="1rem">
            <Heading>{login_user.userName}</Heading>
            <Text color="gray">Conversations</Text>
          </Box>
          <Image
            src={ConversationIcon}
            w="1.75rem"
            h="1.75rem"
            mb="1rem"
            onClick={onOpen}
          />
        </Flex>
        <Box overflow={"scroll"} overflowX="hidden" height={"78vh"}>
          {conversations?.map((conversation) => {
            return (
              <Box onClick={() => setCurrentChat(conversation)}>
                <Conversation
                  conversation={conversation}
                  currentUser={login_user}
                />
              </Box>
            );
          })}
        </Box>
      </Box>
      {currentChat ? (
        <Box flex={"8.5"}>
          <MessageTop
            conversation={currentChat}
            messages={messages}
            setMessages={setMessages}
            currentUser={login_user}
            socket={socket}
          />
        </Box>
      ) : (
        <Box
          flex={"8.5"}
          display={"flex"}
          justifyContent={"center"}
          alignItems="center"
        >
          <Button colorScheme="blue" onClick={onOpen}>
            Start a conversation
          </Button>
        </Box>
      )}
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent maxW={"40%"} minW={"35%"}>
          <ModalHeader>Search For Users</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              placeholder="Search for Users"
              onChange={(e) => OnSearch(e.target.value)}
            />
            <Box h="35vh" overflow={"scroll"} overflowX={"hidden"}>
              {search_results?.map(
                (ele, idx) =>
                  ele._id !== login_user._id && (
                    <Flex
                      mt={"10px"}
                      ml={"4px"}
                      _hover={{ bg: "rgb(239,239,239)" }}
                      cursor={"pointer"}
                      alignItems={"center"}
                      onClick={() => {
                        const res = conversations.find((c) =>
                          c.members.includes(ele._id)
                        );
                        res && setCurrentChat(res);
                        !res && createConversation(ele._id);
                        setTimeout(() => {
                          onClose();
                        }, 500);
                      }}
                    >
                      <Avatar
                        width={"45px"}
                        h={"45px"}
                        name={ele.name}
                        src={
                          ele.profileImage
                            ? `${ele.profileImage}`
                            : "https://bit.ly/broken-link"
                        }
                      />

                      <Box ml={"20px"} mb={"5px"}>
                        <Text fontWeight={"500"}>{ele.name}</Text>
                        <Text color={"grey"}>{ele.userName}</Text>
                      </Box>
                    </Flex>
                  )
              )}
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default Messages;
