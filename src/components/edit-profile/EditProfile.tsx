import {
  Box,
  Button,
  Flex,
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
import "../create-post/create-post.css";
import { useState } from "react";
import { uploadImage } from "../../utils/firebase";
import NoPost from "../../assets/no-post.png";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../../redux/post/postActions";
import { getCookie } from "../../utils/cookies";
import { updateProfile } from "../../redux/user/userAction";
import { getUserAllDetailAction } from "../../redux/search_user/search_user.action";
import { State } from "../../redux/store";

const EditProfile = ({
  onClose,
  isOpen,
  onOpen,
}: {
  onClose: () => void;
  isOpen: boolean;
  onOpen: () => void;
}) => {
  const { isAuth } = useSelector((state: State) => state.userReducer);
  const dispatch = useDispatch();
  const [media, setMedia] = useState(null);
  const [caption, setCaption] = useState<string | null>(null);
  const { login_user } = useSelector((state: State) => state.userReducer);
  console.log(isAuth);
  return (
    <Box>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent minW={"600px"} maxW={"max-content"} minH={"70vh"}>
          <ModalCloseButton right={"-7"} top={"-4"} />
          <ModalBody pt="1rem">
            <Flex gap="1rem">
              {media ? (
                <Box width={"100%"} display={"flex"} gap="1rem">
                  <Image
                    src={media}
                    width={"100%"}
                    minH={"50vh"}
                    maxH={"70vh"}
                    objectFit={"cover"}
                  />
                </Box>
              ) : (
                <Box
                  mt="10%"
                  minW="600px"
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  flexDirection={"column"}
                  gap="1rem"
                >
                  <Image src={NoPost} />
                  <Heading size="md">Update Profile Image</Heading>
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
              <Box display={"flex"} flexDirection={"column"}>
                <Textarea
                  onChange={(e) => setCaption(e.target.value)}
                  placeholder="Update Your Bio"
                  className="large-textarea"
                ></Textarea>
                {(media || caption) && (
                  <Button
                    colorScheme="blue"
                    mt="1rem"
                    width="50%"
                    onClick={() => {
                      let payload: { bio?: string; profileImage?: string } = {};
                      if (caption) {
                        payload["bio"] = caption;
                      }
                      if (media) {
                        payload["profileImage"] = media;
                      }

                      dispatch(
                        updateProfile(
                          payload,
                          getCookie("insta_token"),
                          login_user?._id
                        ) as any
                      );

                      onClose();
                    }}
                  >
                    {" "}
                    Update
                  </Button>
                )}
              </Box>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default EditProfile;
