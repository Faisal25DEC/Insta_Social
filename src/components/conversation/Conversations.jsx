import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { localBaseUrl } from "../../redux/util";

const Conversation = ({ conversation, currentUser }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const userId = conversation?.members.find(
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

  return (
    <Flex
      gap="1rem"
      alignItems={"center"}
      pt="1rem"
      pl="1rem"
      pb="1rem"
      cursor={"pointer"}
      borderBottom={"solid 1px #d6d6d6"}
      _hover={{ backgroundColor: "#edeef0" }}
    >
      <Avatar src={user?.profileImage} />
      <Box>
        <Text>{user?.userName}</Text>
      </Box>
    </Flex>
  );
};

export default Conversation;
