import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import Message from "../message/Message";
import { useEffect, useRef, useState } from "react";
import { localBaseUrl } from "../../redux/util";
import { io } from "socket.io-client";
import axios from "axios";
import { calcLength } from "framer-motion";

const MessageTop = ({
  messages,
  conversation,
  currentUser,
  setMessages,
  socket,
}) => {
  const [user, setUser] = useState(null);
  const [newMessage, setNewMessage] = useState(null);
  const scrollRef = useRef();
  const handleSubmit = async () => {
    const message = {
      sender: currentUser._id,
      text: newMessage,
      conversationId: conversation._id,
    };
    const receiverId = conversation.members.find(
      (member) => member !== currentUser._id
    );
    socket?.current.emit("sendMessage", {
      senderId: currentUser._id,
      senderImage: currentUser.profileImage,
      receiverId,
      text: newMessage,
    });
    try {
      setNewMessage("");
      const res = await axios.post(`${localBaseUrl}/messages`, message);
      setMessages([...messages, res.data]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const getUser = async () => {
      const userId = conversation.members.find(
        (ele) => ele !== currentUser._id
      );
      try {
        const res = await axios.get(`${localBaseUrl}/users/single/${userId}`);
        console.log(res.data);
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [conversation, currentUser]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  return (
    <Box>
      <Flex
        alignItems={"center"}
        gap="1rem"
        borderBottom={"solid 1px #d6d6d6"}
        p={"1rem 1rem"}
        h="10vh"
      >
        <Avatar src={user?.profileImage} />
        <Text fontWeight={"bold"}>{user?.userName}</Text>
      </Flex>
      <Box h="83.5vh" overflow={"scroll"} overflowX={"hidden"}>
        <Box
          w="50%"
          m="auto"
          pt="10%"
          display={"flex"}
          alignItems={"center"}
          flexDirection={"column"}
          gap="1rem"
        >
          <Image
            src={user?.profileImage}
            borderRadius="full"
            w="7rem"
            h="7rem"
            objectFit={"cover"}
          />
          <Heading>{user?.userName}</Heading>
        </Box>
        <Box pl="1rem">
          {messages?.map((message) => {
            return (
              <Box ref={scrollRef}>
                <Message
                  message={message}
                  own={message.sender === currentUser._id}
                />
              </Box>
            );
          })}
        </Box>
      </Box>

      <Flex h="6.5vh">
        <Input
          onKeyDown={(e) => {
            
            if (e.key === 'Enter') {
            handleSubmit()
              
            }
          }}
          onChange={(e) => setNewMessage(e.target.value)}
          value={newMessage}
        />
        <Button
          onClick={() => {
            handleSubmit();
          }}
        >
          Send
        </Button>
      </Flex>
    </Box>
  );
};

export default MessageTop;
