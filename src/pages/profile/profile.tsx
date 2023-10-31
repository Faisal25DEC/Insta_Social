import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Image,
  Spacer,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import ProfileCard from "./profileCard";
import PostGrid from "./postGrid";
import ResponsiveTab from "./responsiveTab";
import NoPost from "./noPost";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { getUserAllDetailAction } from "../../redux/search_user/search_user.action";
import { useSelector } from "react-redux";
type RootState = {
  searchUserReducer: {
    // Define the structure of your reducer's state here
    searchUserDetail: any;
    searchUserFollower: any[];
    searchUserFollowing: any[];
    searchUserPosts: any[];
  };
};

const Profile = () => {
  const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();

  useEffect(() => {
    dispatch(getUserAllDetailAction());
  }, []);
  // const {
  //   searchUserDetail,
  //   searchUserFollower,
  //   searchUserFollowing,
  //   searchUserPosts,
  // } = useSelector((state: RootState) => state.searchUserReducer);

  // console.log(searchUser);
  // const { bio, name, profileImage, userName, _id : searchUserId } = searchUserDetail;
  const searchUserId: string = "12";
  const loginUserId: string = "2";
  const searchUserFollowing: string[] = ["11", "12", "13"];
  const isSameUser: boolean = searchUserId == loginUserId;
  const profileButtonText1: string = isSameUser
    ? "Edit Profile"
    : searchUserFollowing.includes(searchUserId)
    ? "Following"
    : "Follow";

  const profileButtonText2: string = isSameUser ? "View archive" : "Message";
  return (
    <>
      <Flex w="100%">
        <Box
          display={{ base: "none", lg: "block" }}
          w="20%"
          h="100vh"
          border="1px solid blue"
        >
          Side bar
        </Box>
        <Container centerContent maxW="100%">
          <Box w={{ base: "100%", md: "100%", lg: "70%" }}>
            <VStack>
              <ProfileCard
                profileButtonText1={profileButtonText1}
                profileButtonText2={profileButtonText2}
                isSameUser={isSameUser}
              />
              <Tabs display={{ base: "none", md: "block" }}>
                <TabList w="max-content" m="auto">
                  <Tab me="2rem">POSTS</Tab>
                  <Tab me="2rem">REELS</Tab>
                  <Tab>TAGS</Tab>
                </TabList>

                <TabPanels>
                  <TabPanel>
                    <NoPost />
                    {/* <PostGrid /> */}
                  </TabPanel>
                  <TabPanel>
                    <PostGrid />
                  </TabPanel>
                  <TabPanel>
                    <PostGrid />
                  </TabPanel>
                </TabPanels>
              </Tabs>
              <ResponsiveTab />
            </VStack>
          </Box>
        </Container>
      </Flex>
    </>
  );
};

export default Profile;
