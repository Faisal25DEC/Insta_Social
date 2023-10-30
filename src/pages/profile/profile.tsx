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

const Profile = () => {
 
  return (
    <>
      <Flex w="100%">
        <Box display={{base:"none",lg:"block" }} w="20%" h="100vh" border="1px solid blue">
          Side bar
        </Box>
        <Container centerContent maxW="100%">
          <Box w={{base:"100%",md:"100%",lg:"70%"}}>
            <VStack >
              <ProfileCard />
              <Tabs display={{base:"none",md:"block" }} >
                <TabList w="max-content" m="auto">
                  <Tab me='2rem' >POSTS</Tab>
                  <Tab me='2rem'>REELS</Tab>
                  <Tab>TAGS</Tab>
                </TabList>

                <TabPanels>
                  <TabPanel>
                    <NoPost/>
                    {/* <PostGrid /> */}
                  </TabPanel>
                  <TabPanel>
                    {/* <PostGrid /> */}
                  </TabPanel>
                  <TabPanel>
                    {/* <PostGrid /> */}
                  </TabPanel>
                </TabPanels>
              </Tabs>
              <ResponsiveTab/>

              
            </VStack>
          </Box>
        </Container>
      </Flex>
    </>
  );
};

export default Profile;
