import "./post-card.css";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Icon,
  IconButton,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spacer,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
  FaComment,
  FaDotCircle,
  FaHeart,
  FaRegBookmark,
  FaRegComment,
  FaRegHeart,
  FaSave,
  FaThumbsUp,
} from "react-icons/fa";
const PostCard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [post, setPost] = useState({
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT-4YbvE-R4dDvsyWHMCfRCfq1lA1PMs6kPweGsPGkPtgebbR0h",
    description: "I am hrithik roshan",
    likes: 35632,
    comments: 3252,
  });
  const [userDetails, setUserDetails] = useState({
    userName: "hrithikroshan123",
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT-4YbvE-R4dDvsyWHMCfRCfq1lA1PMs6kPweGsPGkPtgebbR0h",
  });
  return (
    <Box>
      <Card maxW="md" m="auto">
        <CardHeader>
          <Flex spacing="4">
            <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
              <Avatar name={userDetails.userName} src={userDetails.image} />

              <Box>
                <Heading size="sm">Segun Adebayo</Heading>
                <Text>Creator, Chakra UI</Text>
              </Box>
            </Flex>
            <IconButton
              variant="ghost"
              colorScheme="gray"
              aria-label="See menu"
              icon={<FaDotCircle />}
            />
          </Flex>
        </CardHeader>
        <CardBody>
          <Image objectFit="cover" src={post.image} alt="Chakra UI" />
        </CardBody>

        <CardFooter
          display={"block"}
          sx={{
            "& > button": {
              minW: "136px",
            },
          }}
        >
          <Flex width="100%">
            <Flex gap="1rem">
              <FaRegHeart />
              <FaRegComment />
            </Flex>

            <Spacer />
            <Box>
              <FaRegBookmark />
            </Box>
          </Flex>
          <Box mt="0.4rem">
            <Text fontSize={"1rem"}>{post.likes} likes</Text>
          </Box>
          <Flex>
            <span>
              <Text display={"inline-block"} fontWeight={"bold"} mt="0.5rem">
                {userDetails.userName}
              </Text>{" "}
              {post.description}
            </span>
          </Flex>
          <Text
            onClick={onOpen}
            mt="0.4rem"
            fontSize={"0.8rem"}
            fontWeight={"light"}
            display={"block"}
          >
            View All Comments
          </Text>
        </CardFooter>
      </Card>
      <Modal
        size="6xl"
        isCentered={true}
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent
          className="custom-modal-width"
          sx={{ width: "80%", height: "80vh" }}
        >
          <ModalCloseButton />
          <ModalBody>
            <Flex gap="1rem">
              <Box width="50%" display={"flex"} alignItems={"center"}>
                <Image
                  src={post.image}
                  height={"inherit"}
                  maxW={"100%"}
                  objectFit={"cover"}
                  alignSelf={"center"}
                />
              </Box>

              <Box>
                <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                  <Avatar name={userDetails.userName} src={userDetails.image} />

                  <Box>
                    <Heading size="sm">{userDetails.userName}</Heading>
                  </Box>
                </Flex>
                <Box>
                  <VStack>
                    <Box>
                      <Flex>
                        <span></span>
                      </Flex>
                    </Box>
                  </VStack>
                </Box>
              </Box>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default PostCard;
