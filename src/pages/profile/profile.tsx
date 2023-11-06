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
import { MdGridOn } from "react-icons/md";
import { BiBookmark } from "react-icons/bi";
import { BiUserPin } from "react-icons/bi";
import React from "react";
import ProfileCard from "./profileCard";
import PostGrid from "./postGrid";
import ResponsiveTab from "./responsiveTab";
import { NoPost, NoSaved, NoTagged } from "./noPost";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import {
  getLoginUserFollowing,
  getUserAllDetailAction,
} from "../../redux/search_user/search_user.action";
import { useSelector } from "react-redux";
import Sidebar from "../../components/navbar/nav";
import { useParams } from "react-router-dom";
import { PostLoaders } from "./loaders";
import {
  USER_ALL_LOADING_FALSE,
  USER_ALL_LOADING_TRUE,
} from "../../redux/search_user/search_user.actionTypes";
import { getCookie } from "../../utils/cookies";

type RootState = {
  searchUserReducer: {
    // Define the structure of your reducer's state here
    searchUserDetail: any;
    searchUserFollower: any[];
    searchUserFollowing: any[];
    searchUserPosts: any[];
  };
};

type userReducer = {
  _id: string;
};

type loginUserObject = {
  userReducer: {
    isAuth: boolean;
    error: boolean;
    login_user: userReducer;
    search_results: any[];
    login_following: any[];
  };
};

interface RouteParams {
  userId: string;
}

const Profile = () => {
  const { login_user } = useSelector(
    (state: loginUserObject) => state.userReducer
  );
  const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();
  const [isPostLoading, setIsPostLoading] = useState(true);
  // const { userId } = useParams<RouteParams>();
  const { searchUserPosts } = useSelector(
    (store: RootState) => store.searchUserReducer
  );
  const { userId } = useParams();
  console.log(userId);
  useEffect(() => {
    dispatch({ type: USER_ALL_LOADING_TRUE });
    dispatch(getUserAllDetailAction(userId) as any);
    dispatch(getLoginUserFollowing(login_user._id) as any);
    dispatch({ type: USER_ALL_LOADING_FALSE });
  }, [userId]);

  // console.log(userId);
  const searchUserId: any = userId;
  const loginUserId: string = login_user._id;
  const isSameUser: boolean = searchUserId == loginUserId;

  return (
    <>
      <Flex w="100%">
        <Box
        // w="20%"
        >
          <Sidebar />
        </Box>

        <Spacer />
        <Container
          // border={"2px"}
          // centerContent
          maxW="90%"
          // w="100%"
          paddingY={"2rem"}
          minW="80%"
          marginX="auto"
        >
          <Box w={{ base: "100%", md: "80%", lg: "70%" }} marginX={"auto"}>
            <VStack>
              <ProfileCard isSameUser={isSameUser} />
              <Tabs display={{ base: "none", md: "block" }}>
                <TabList w="max-content" m="auto">
                  <Tab me="2rem">
                    {" "}
                    <MdGridOn /> POSTS
                  </Tab>
                  <Tab me="2rem">
                    {" "}
                    <BiBookmark /> SAVED
                  </Tab>
                  <Tab>
                    {" "}
                    <BiUserPin /> TAGGED
                  </Tab>
                </TabList>

                <TabPanels>
                  <TabPanel>
                    <PostGrid />
                  </TabPanel>

                  <TabPanel>
                    <NoSaved />
                  </TabPanel>

                  <TabPanel>
                    <NoTagged isSameUser={isSameUser} />
                  </TabPanel>
                </TabPanels>
              </Tabs>
              <ResponsiveTab isSameUser={isSameUser} />
              <Box
                display={{ base: "none", md: "flex" }}
                // textAlign={'center'}
                justifyContent={"center"}
                rowGap={"0.5rem"}
                columnGap={"1rem"}
                flexWrap={"wrap"}
              >
                <Text fontSize="sm">Meta</Text>
                <Text fontSize="sm">About</Text>
                <Text fontSize="sm">Blog</Text>
                <Text fontSize="sm"> Jobs </Text>
                <Text fontSize="sm"> Help </Text>
                <Text fontSize="sm"> API </Text>
                <Text fontSize="sm"> Privacy </Text>
                <Text fontSize="sm"> Terms </Text>
                <Text fontSize="sm"> Location </Text>
                <Text fontSize="sm"> Instagram Lite </Text>
                <Text fontSize="sm"> Threads </Text>
                <Text fontSize="sm"> Contact Uploading and non-users </Text>
                <Text fontSize="sm"> Meta Verified </Text>
                <Text fontSize="sm"> English(UK) </Text>
                <Text fontSize="sm"> 2023 Instagram from Meta </Text>
                <Text fontSize="sm"> </Text>
              </Box>
            </VStack>
          </Box>
        </Container>
      </Flex>
    </>
  );
};

export default Profile;
