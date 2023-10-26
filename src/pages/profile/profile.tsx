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
} from "@chakra-ui/react";
import React from "react";
import ProfileCard from "./profileCard";
import PostGrid from "./postGrid";

const Profile = () => {
  return (
    <>
      <Flex w="100%">
        <Box w="20%" h="100vh" border="1px solid #0d27be">
          Side bar
        </Box>
        <Container centerContent maxW="100%">
          <Box w="70%">
            <VStack >
              <ProfileCard />
              <Tabs>
                <TabList w="max-content" m="auto">
                  <Tab>POSTS</Tab>
                  <Tab>REELS</Tab>
                  <Tab>TAGS</Tab>
                </TabList>

                <TabPanels>
                  <TabPanel>
                    <PostGrid />
                  </TabPanel>
                  <TabPanel>
                    <PostGrid />
                  </TabPanel>
                  <TabPanel>
                    <PostGrid />
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </VStack>
          </Box>
        </Container>
      </Flex>
    </>
  );
};

export default Profile;
