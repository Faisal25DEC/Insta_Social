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
import React, { useEffect, useRef, useState } from "react";
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
import { baseUrl } from "../../redux/util";
import axios from "axios";
import { isLiked } from "../../utils/likes.utils";
import { useDispatch, useSelector } from "react-redux";
import { likePost, unlikePost } from "../../redux/like/likeActions";
import { getCookie } from "../../utils/cookies";
import { postComment } from "../../redux/comment/commentActions";
import { getUserDetails } from "../../redux/user/userAction";
import "../../components/postCard/post-card.css";
const PostModal = ({
  onClose,
  isOpen,
  onOpen,
  mediaUrl,
  caption,
  author,
  authorImage,
  _id,
}) => {
  const [comments, setComments] = useState([]);

  const [saveButtonClicked, setSaveButtonClicked] = useState(false);
  const [commentInput, setCommentInput] = useState("");
  const [post, setPost] = useState({
    image: mediaUrl,
    caption: caption,
    likes: [],
    comments: 3252,
  });
  const [userDetails, setUserDetails] = useState({
    userName: author,
    image: authorImage,
  });

  const { login_user } = useSelector((state) => state.userReducer);

  const commentRef = useRef();

  const dispatch = useDispatch();

  const getPostComments = async (postId) => {
    console.log(postId);

    try {
      const res = await axios.get(`${baseUrl}/comments/${postId}`);
      console.log(res.data);
      setComments(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getPostLikes = async (postId) => {
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

  return (
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
              maxHeight={"90vh"}
              maxW={"60rem"}
              objectFit={"cover"}
            />
            <Box mt="0.5rem" mb="0.5rem" minW="20rem" maxW="30rem">
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
                    height="70vh"
                    scrollBehavior={"smooth"}
                  >
                    {comments?.map((comment, index) => {
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
              <Box ml="1rem">
                <Flex width="95%" pt="0.6rem" m="auto" alignItems={"center"}>
                  <Flex gap="1rem">
                    {!isLiked(post.likes, login_user._id) ? (
                      <FaRegHeart
                        className="reg-heart icon-size"
                        onClick={() => {
                          const token = getCookie("insta_token");
                          dispatch(likePost(_id, token)).then((res) => {
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
                          dispatch(unlikePost(_id, token)).then((res) => {
                            getPostLikes(_id);
                          });
                        }}
                      />
                    )}
                    <FaRegComment
                      className="icon-size"
                      onClick={() => {
                        commentRef.current.focus();
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
                >
                  {prettyNum(post.likes?.length, { thousandsSeparator: "," })}{" "}
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
                    dispatch(postComment(commentInput, _id)).then((res) => {
                      getPostComments(_id);
                    });
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
  );
};

export default PostModal;
