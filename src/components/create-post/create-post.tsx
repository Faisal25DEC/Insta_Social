import {
  Box,
  Button,
  FormLabel,
  Heading,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
} from "@chakra-ui/react";
import "./create-post.css";
import { useState } from "react";
import { uploadImage } from "../../utils/firebase";
import NoPost from "../../assets/no-post.png";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../../redux/post/postActions";
import { getCookie } from "../../utils/cookies";
import { getUserAllDetailAction } from "../../redux/search_user/search_user.action";
import { State } from "../../redux/store";

const CreatePost = ({
  onClose,
  isOpen,
  onOpen,
}: {
  onClose: () => void;
  isOpen: boolean;
  onOpen: () => void;
}) => {
  const [nextButtonClicked, setNextButtonClicked] = useState(false);
  const { isAuth } = useSelector((state: State) => state.userReducer);
  const dispatch = useDispatch();
  const [media, setMedia] = useState<string | null>(null);
  const [caption, setCaption] = useState<string | null>(null);
  const { login_user } = useSelector((store: State) => store.userReducer);
  console.log(isAuth);
  return (
    <Box>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent minW={"600px"} maxW={"max-content"} minH={"70vh"}>
          <ModalHeader
            ml="auto"
            color={"blue"}
            cursor={"pointer"}
            onClick={() => {
              if (isAuth && nextButtonClicked) {
                const token = getCookie("insta_token");
                media !== null &&
                  login_user &&
                  dispatch(
                    createPost(
                      token,
                      { mediaUrl: media, caption },
                      login_user?._id
                    ) as any
                  );
                setTimeout(() => {
                  setMedia(null);
                  setCaption("");
                  setNextButtonClicked(false);
                }, 500);
                onClose();
              } else {
                setNextButtonClicked(true);
              }
            }}
          >
            {media != null ? (nextButtonClicked ? "share" : "next") : ""}
          </ModalHeader>
          <ModalCloseButton right={"-7"} top={"-4"} />
          <ModalBody
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            {media ? (
              <Box width={"100%"} display={"flex"} gap="1rem">
                <Image
                  src={media}
                  width={"100%"}
                  height={"50vh"}
                  objectFit={"cover"}
                />
                {nextButtonClicked ? (
                  <Box>
                    <Textarea
                      onChange={(e) => setCaption(e.target.value)}
                      placeholder="Add Title"
                      className="large-textarea"
                    ></Textarea>
                  </Box>
                ) : null}
              </Box>
            ) : (
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                flexDirection={"column"}
                gap="1rem"
              >
                <Image src={NoPost} />
                <Heading size="md">Select Image from computer</Heading>
                <Input
                  display="none"
                  id="fileInput"
                  name="fileInput"
                  type="file"
                  onChange={(e) => {
                    e.target.files &&
                      e.target.files.length > 0 &&
                      uploadImage(e.target.files[0])
                        .then((downloadURL) => {
                          setMedia(downloadURL);
                          console.log(downloadURL);
                        })
                        .catch((err) => {
                          console.log(err);
                        });
                  }}
                />
                <Button
                  colorScheme="blue"
                  paddingTop={"0.3rem"}
                  paddingRight={"0.3rem"}
                  textAlign={"center"}
                >
                  <FormLabel htmlFor="fileInput">
                    Select from Computer
                  </FormLabel>
                </Button>
              </Box>
            )}
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default CreatePost;
