import "./post-card.css";
import { prettyNum } from "pretty-num";
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
  Input,
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
  FaBookmark,
  FaComment,
  FaDotCircle,
  FaHeart,
  FaRegBookmark,
  FaRegComment,
  FaRegHeart,
  FaSave,
  FaThumbsUp,
} from "react-icons/fa";
import { uploadImage } from "../../utils/firebase";
const PostCard = () => {
  const [likeButtonClicked, setLikeButtonClicked] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [saveButtonClicked, setSaveButtonClicked] = useState(false);
  const [post, setPost] = useState({
    image:
      "https://pbs.twimg.com/media/F8_TYjsXoAAiFLH?format=jpg&name=900x900",
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
        <CardBody
          sx={{
            paddingInline: "0",
            WebkitPaddingStart: 0,
            paddingBlockStart: 0,
          }}
        >
          <Image
            objectFit="cover"
            width="100%"
            src={post.image}
            alt="Chakra UI"
          />
        </CardBody>

        <CardFooter
          width="95%"
          m="auto"
          display={"block"}
          sx={{
            "& > button": {
              minW: "136px",
            },
            paddingInline: "0",
            WebkitPaddingStart: 3,
            paddingBlockStart: 0,
          }}
        >
          <Flex width="100%" mb="1rem">
            <Flex gap="1rem">
              {!likeButtonClicked ? (
                <FaRegHeart
                  className="reg-heart icon-size"
                  onClick={() => {
                    setLikeButtonClicked(!likeButtonClicked);
                  }}
                />
              ) : (
                <FaHeart
                  className="icon-size"
                  cursor={"pointer"}
                  color="red"
                  onClick={() => {
                    setLikeButtonClicked(!likeButtonClicked);
                  }}
                />
              )}
              <FaRegComment className="icon-size" />
            </Flex>

            <Spacer />
            <Box
              onClick={() => {
                setSaveButtonClicked(!saveButtonClicked);
              }}
            >
              {saveButtonClicked ? (
                <FaBookmark className="icon-size" />
              ) : (
                <FaRegBookmark className="icon-size" />
              )}
            </Box>
          </Flex>
          <Box mt="0.4rem">
            <Text fontSize={"1rem"} display={"inline"} fontWeight={"medium"}>
              {prettyNum(post.likes, { thousandsSeparator: "," })}{" "}
              <Text
                fontSize={"0.9rem"}
                display={"inline"}
                fontWeight={"medium"}
              >
                likes
              </Text>
            </Text>
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
            fontWeight={"medium"}
            display={"block"}
            cursor="pointer"
            _hover={{ color: "grey" }}
          >
            View All Comments
          </Text>
        </CardFooter>
      </Card>
      <Modal
        isCentered={true}
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent className="custom-modal-width" borderRadius={"0"}>
          <ModalCloseButton />
          <ModalBody
            sx={{
              paddingInline: "0",
              WebkitPaddingStart: 0,
              paddingBlockStart: 0,
            }}
          >
            <Flex>
              {" "}
              <Image src={post.image} maxHeight={"90vh"} />
              <Box mt="0.5rem" mb="0.5rem">
                <Flex
                  flex="1"
                  gap="2"
                  alignItems="center"
                  flexWrap="wrap"
                  ml={"1rem"}
                >
                  <Avatar
                    name={userDetails.userName}
                    src={userDetails.image}
                    width={"35px"}
                    height="35px"
                  />

                  <Box>
                    <Text
                      size="sm"
                      fontSize={"1rem"}
                      fontWeight={"500"}
                      color="gray.600"
                    >
                      {userDetails.userName}
                    </Text>
                  </Box>
                </Flex>
                <hr></hr>
                <Box paddingRight={"1rem"} ml="1rem">
                  <VStack>
                    <Box
                      className="hide-scroll-bar"
                      overflow={"scroll"}
                      height="70vh"
                      scrollBehavior={"smooth"}
                    >
                      {Array.from({ length: 20 }, (_, index) => {
                        return (
                          <Flex>
                            <Text display={"inline"} fontSize={"0.9rem"}>
                              <Text
                                fontSize={".95rem"}
                                display={"inline-block"}
                                fontWeight={"medium"}
                                mt="0.5rem"
                              >
                                {userDetails.userName}
                              </Text>{" "}
                              Lorem ipsum, dolor sit amet consectetur
                              adipisicing elit. Quasi, quis!
                            </Text>
                          </Flex>
                        );
                      })}
                    </Box>
                  </VStack>
                </Box>
                <Box ml="1rem">
                  <Flex width="95%" pt="0.6rem" m="auto" alignItems={"center"}>
                    <Flex gap="1rem">
                      {likeButtonClicked ? (
                        <FaRegHeart
                          className="reg-heart icon-size"
                          onClick={() => {
                            setLikeButtonClicked(!likeButtonClicked);
                          }}
                        />
                      ) : (
                        <FaHeart
                          className="icon-size"
                          cursor={"pointer"}
                          color="red"
                          onClick={() => {
                            setLikeButtonClicked(!likeButtonClicked);
                          }}
                        />
                      )}
                      <FaRegComment className="icon-size" />
                    </Flex>

                    <Spacer />
                    <Box
                      onClick={() => {
                        setSaveButtonClicked(!saveButtonClicked);
                      }}
                    >
                      {saveButtonClicked ? (
                        <FaBookmark className="icon-size" />
                      ) : (
                        <FaRegBookmark className="icon-size" />
                      )}
                    </Box>
                  </Flex>
                  <Text
                    fontSize={"1rem"}
                    display={"inline-block"}
                    fontWeight={"medium"}
                    width="95%"
                    m="auto"
                    pt="0.5rem"
                  >
                    {prettyNum(post.likes, { thousandsSeparator: "," })}{" "}
                    <Text
                      fontSize={"0.9rem"}
                      display={"inline"}
                      fontWeight={"medium"}
                    >
                      likes
                    </Text>
                  </Text>
                </Box>
                <hr></hr>
                <Input
                  className="comment-input"
                  variant={"unstyled"}
                  width="100%"
                  padding={"0"}
                  ml="0.3rem"
                  outline={"none"}
                  border={"none"}
                  placeholder="Write your comment"
                  borderRadius={"0"}
                />
              </Box>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Input
        type="file"
        onChange={(e) => {
          uploadImage(e.target.files[0])
            .then((downloadURL) => {
              console.log(downloadURL);
            })
            .catch((err) => {
              console.log(err);
            });
        }}
      />
    </Box>
  );
};

export default PostCard;
