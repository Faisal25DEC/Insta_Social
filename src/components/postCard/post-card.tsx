import "./post-card.css";
import { prettyNum } from "pretty-num";

import {
  Avatar,
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  IconButton,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Spacer,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import React, {
  LegacyRef,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  FaBookmark,
  FaComment,
  FaDotCircle,
  FaHeart,
  FaRegBookmark,
  FaRegComment,
  FaRegHeart,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { likePost, unlikePost } from "../../redux/like/likeActions";
import { getCookie } from "../../utils/cookies";
import axios from "axios";
import { baseUrl } from "../../redux/util";
import { isLiked } from "../../utils/likes.utils";
import { getUserDetails } from "../../redux/user/userAction";
import { postComment } from "../../redux/comment/commentActions";
import { Link } from "react-router-dom";
import { IPost } from "../../redux/post/postTypes";
import { State } from "../../redux/store";
import { IComment } from "../../redux/comment/commentTypes";

const PostCard = ({
  mediaUrl,
  caption,
  authorImage,
  author,
  _id,
  authorId,
}: IPost) => {
  const [commentInput, setCommentInput] = useState("");

  const [likeButtonClicked, setLikeButtonClicked] = useState(false);

  const { login_user } = useSelector((state: State) => state.userReducer);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [saveButtonClicked, setSaveButtonClicked] = useState(false);

  const [comments, setComments] = useState([]);

  const commentRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useDispatch();

  const [post, setPost] = useState<{
    image: string;
    caption: string | null;
    likes: string[];
    comments: number;
  }>({
    image: mediaUrl,
    caption: caption,
    likes: [],
    comments: 3252,
  });
  const [userDetails, setUserDetails] = useState({
    userName: author,
    image: authorImage,
    id: authorId,
  });

  const getPostComments = async (postId: string) => {
    console.log(postId);

    try {
      const res = await axios.get(`${baseUrl}/comments/${postId}`);
      console.log(res.data);
      setComments(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getPostLikes = async (postId: string) => {
    try {
      const res = await axios.get(`${baseUrl}/likes/${postId}`);
      console.log(res);
      setPost({
        ...post,
        likes: [...res.data],
      });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getPostLikes(_id);
    getPostComments(_id);
    const token = getCookie("insta_token");
    if (token) {
      getUserDetails(token);
    }
  }, []);
  console.log(post.likes);
  return (
    <Box>
      <Card maxW="md" m="auto">
        <CardHeader>
          <Flex justifyContent={"space-between"}>
            <Link to={`/profile/${authorId}`}>
              <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                <Avatar name={userDetails.userName} src={userDetails.image} />

                <Box>
                  <Heading size="sm">{userDetails.userName}</Heading>
                </Box>
              </Flex>
            </Link>
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
              {!isLiked(post.likes, login_user._id) ? (
                <FaRegHeart
                  className="reg-heart icon-size"
                  onClick={() => {
                    const token = getCookie("insta_token");
                    dispatch(likePost(_id, token) as any).then(() => {
                      getPostLikes(_id);
                    });
                  }}
                />
              ) : (
                <FaHeart
                  className="icon-size"
                  cursor={"pointer"}
                  color="red"
                  onClick={() => {
                    const token = getCookie("insta_token");
                    dispatch(unlikePost(_id, token) as any).then(() => {
                      getPostLikes(_id);
                    });
                  }}
                />
              )}
              <FaRegComment className="icon-size" onClick={onOpen} />
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
              {prettyNum(post.likes.length, { thousandsSeparator: "," })}{" "}
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
              {post.caption}
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
              <Image
                src={post.image}
                maxW={"60rem"}
                maxHeight={"90vh"}
                objectFit={"cover"}
              />
              <Box mt="0.5rem" mb="0.5rem" minW="28rem" maxW="32rem">
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
                  <VStack alignItems={"flex-start"}>
                    <Box
                      className="hide-scroll-bar"
                      overflow={"scroll"}
                      height="67.5vh"
                      scrollBehavior={"smooth"}
                    >
                      {comments?.map((comment: IComment, index) => {
                        return (
                          <Flex>
                            <Text display={"inline"} fontSize={"0.9rem"}>
                              <Text
                                fontSize={".95rem"}
                                display={"inline-block"}
                                fontWeight={"medium"}
                                mt="0.5rem"
                              >
                                {comment.name}
                              </Text>{" "}
                              {comment.content}
                            </Text>
                          </Flex>
                        );
                      })}
                    </Box>
                  </VStack>
                </Box>
                <hr />
                <Box pt="1.25rem">
                  <Flex width="95%" pt="0.5rem" m="auto" alignItems={"center"}>
                    <Flex gap="1rem">
                      {!isLiked(post.likes, login_user._id) ? (
                        <FaRegHeart
                          className="reg-heart icon-size"
                          onClick={() => {
                            const token = getCookie("insta_token");
                            dispatch(likePost(_id, token) as any).then(() => {
                              getPostLikes(_id);
                            });
                          }}
                        />
                      ) : (
                        <FaHeart
                          className="icon-size"
                          cursor={"pointer"}
                          color="red"
                          onClick={() => {
                            const token = getCookie("insta_token");
                            dispatch(unlikePost(_id, token) as any).then(() => {
                              getPostLikes(_id);
                            });
                          }}
                        />
                      )}
                      <FaRegComment
                        className="icon-size"
                        onClick={() => {
                          commentRef.current && commentRef.current.focus();
                        }}
                      />
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
                    ml="0.75rem"
                  >
                    {prettyNum(post.likes.length, { thousandsSeparator: "," })}{" "}
                    <Text
                      fontSize={"0.9rem"}
                      display={"inline"}
                      fontWeight={"medium"}
                    >
                      likes
                    </Text>
                  </Text>
                </Box>
                <hr />
                <Flex
                  justifyContent={"space-between"}
                  pr={"5px"}
                  alignItems={"center"}
                >
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
                    ref={commentRef}
                    value={commentInput}
                    onChange={(e) => {
                      setCommentInput(e.target.value);
                    }}
                  />
                  <Text
                    onClick={() => {
                      dispatch(postComment(commentInput, _id) as any).then(
                        () => {
                          getPostComments(_id);
                        }
                      );
                      setCommentInput("");
                    }}
                    fontWeight={"medium"}
                    fontSize={"0.8rem"}
                    color={"blue"}
                    display={commentInput === "" ? "none" : "block"}
                    cursor={"pointer"}
                  >
                    Send
                  </Text>
                </Flex>
              </Box>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default PostCard;
