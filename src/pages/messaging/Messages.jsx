import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Conversation from "../../components/conversation/Conversations";
import MessageTop from "../../components/messageTop/MessageTop";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { localBaseUrl } from "../../redux/util";
import { io } from "socket.io-client";

const Messages = () => {
  const { login_user } = useSelector((state) => state.userReducer);
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [arrivalMessage, setArrivalMessage] = useState({});
  const socket = useRef();
  useEffect(() => {
    socket.current = io("ws://localhost:8900");
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
      <Box flex={"3.5"} borderRight={"solid 1px gray"} pt="5%">
        <Box borderBottom={"solid 1px gray"} pl={"2rem"} pb="1rem">
          <Heading>{login_user.userName}</Heading>
          <Text color="gray">Conversations</Text>
        </Box>
        <Box>
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
        <Box flex={"8.5"}>
          <Heading textAlign={"center"} color={"gray.600"}>
            Start Conversation
          </Heading>
        </Box>
      )}
    </Flex>
  );
};

export default Messages;
