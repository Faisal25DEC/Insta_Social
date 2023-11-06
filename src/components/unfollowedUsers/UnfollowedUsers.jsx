import { Avatar, Box, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCookie } from "../../utils/cookies";
import { getUnfollowedUsers } from "../../redux/user/userAction";

const UnfollowedUsers = () => {
  const { unfollowedUsers } = useSelector((state) => state.userReducer);
  const { login_user } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = getCookie("insta_token");
    if (token) {
      dispatch(getUnfollowedUsers(token));
      console.log(unfollowedUsers);
    }
  }, []);
  return (
    <Box marginRight={"10%"} marginTop={"5%"} minW="30%">
      <Flex justifyContent={"space-between"} alignItems={"center"} mb="2rem">
        <Flex alignItems={"center"} gap="1rem">
          <Avatar src={login_user?.profileImage} size="md" />
          <Text fontWeight={"600"} fontSize="1.1rem">
            {login_user?.userName}
          </Text>
        </Flex>
        <Text
          fontSize="0.8rem"
          fontWeight={"bold"}
          color="#0c5eed"
          cursor={"pointer"}
        >
          switch
        </Text>
      </Flex>
      <hr />
      <Heading size="sm" mb=".6rem" mt="1rem" color="gray">
        Suggested For You
      </Heading>
      {unfollowedUsers?.map((users, index) => {
        const { profileImage, userName } = users;
        if (index < 4) {
          return (
            <Flex justifyContent="space-between" alignItems={"center"}>
              <Flex alignItems={"center"} gap="1rem" marginTop={"0.5rem"}>
                <Avatar src={profileImage} size="sm" />
                <Text fontWeight={"600"} fontSize="0.9rem">
                  {userName}
                </Text>
              </Flex>
              <Text
                fontSize="0.8rem"
                fontWeight={"bold"}
                color="#0c5eed"
                cursor="pointer"
              >
                Follow
              </Text>
            </Flex>
          );
        }
      })}
    </Box>
  );
};

export default UnfollowedUsers;
