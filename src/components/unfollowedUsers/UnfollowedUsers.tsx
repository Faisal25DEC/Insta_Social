import { Avatar, Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCookie } from "../../utils/cookies";
import { getUnfollowedUsers } from "../../redux/user/userAction";
import { Link } from "react-router-dom";
import { isFollowing } from "../../utils/following.utils";
import {
  onFollowAction,
  onUnFollowAction,
} from "../../redux/search_user/search_user.action";
import { State } from "../../redux/store";

const UnfollowedUsers = () => {
  const [followButtonLoading, setFollowButtonLoading] = useState<number | null>(
    null
  );
  const { unfollowedUsers } = useSelector((state: State) => state.userReducer);
  const { login_user } = useSelector((state: State) => state.userReducer);
  const { loginUserFollowing: following } = useSelector(
    (state: State) => state.searchUserReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const token = getCookie("insta_token");
    if (token) {
      dispatch(getUnfollowedUsers(token) as any);
      console.log(unfollowedUsers);
    }
  }, []);
  return (
    <Box
      marginRight={"10%"}
      marginTop={"2%"}
      minW="30%"
      display={{ base: "none", md: "none", lg: "block" }}
    >
      <Link to={`profile/${login_user?._id}`}>
        <Heading color="gray" size="sm">
          Your Profile
        </Heading>
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          mb="2rem"
          mt="1rem"
        >
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
      </Link>
      <hr />
      <Heading size="sm" mb=".6rem" mt="1rem" color="gray">
        Suggested For You
      </Heading>
      {unfollowedUsers?.map((users, index) => {
        const { profileImage, userName } = users;
        if (index < 4) {
          return (
            <Flex justifyContent="space-between" alignItems={"center"}>
              <Link to={`profile/${users._id}`}>
                <Flex alignItems={"center"} gap="1rem" marginTop={"0.5rem"}>
                  <Avatar src={profileImage} size="sm" />
                  <Text fontWeight={"600"} fontSize="0.9rem">
                    {userName}
                  </Text>
                </Flex>
              </Link>
              <Text
                fontSize="0.8rem"
                fontWeight={"bold"}
                color="#0c5eed"
                cursor="pointer"
                onClick={() => {
                  if (isFollowing(following, users._id)) {
                    setFollowButtonLoading(index);
                    dispatch(
                      onUnFollowAction(users._id, login_user?._id) as any
                    );
                    setTimeout(() => {
                      setFollowButtonLoading(null);
                    }, 1200);
                  } else {
                    setFollowButtonLoading(index);
                    dispatch(onFollowAction(users._id, login_user?._id) as any);
                    setTimeout(() => {
                      setFollowButtonLoading(null);
                    }, 1200);
                  }
                }}
              >
                {followButtonLoading === index ? (
                  <Image src="https://i.gifer.com/ZKZg.gif" w="15px" h="15px" />
                ) : isFollowing(following, users._id) ? (
                  "Following"
                ) : (
                  "Follow"
                )}
              </Text>
            </Flex>
          );
        }
      })}
    </Box>
  );
};

export default UnfollowedUsers;
