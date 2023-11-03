import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import PostCard from "../../components/postCard/post-card";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../redux/post/postActions";

const Home = () => {
  const { posts } = useSelector((state) => state.postReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, []);
  return (
    <Box>
      {posts?.map((post) => {
        return <PostCard key={post._id} {...post} />;
      })}
    </Box>
  );
};

export default Home;
