import { Button, Link } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as ReactRouterLink } from "react-router-dom";

import {
  getLoginUserFollowing,
  getUserAllDetailAction,
  onFollowAction,
  onUnFollowAction,
} from "../../redux/search_user/search_user.action";
import { useParams } from "react-router-dom";
// import Cookies from "js-cookie";
interface FollowBtnProps {
  _id: any;
}
interface MessageBtnProps {
  _id: any;
}
interface RootState {
  searchUserReducer: {
    // Define the structure of your reducer's state here
    searchUserDetail: any;
    searchUserFollower: any[];
    searchUserFollowing: any[];
    searchUserPosts: any[];
    loginUserFollowing: any[];
  };
}
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

interface EditButtonProps {
  onOpen: any;
}
interface RouteParams {
  userId: string;
}

export const FollowButton: React.FC<FollowBtnProps> = ({ _id }) => {
  const [loading, setLoading] = useState(false);

  const { login_user } = useSelector(
    (state: loginUserObject) => state.userReducer
  );
  const dispatch = useDispatch();
  const { userId: searchUserId } = useParams();

  const { loginUserFollowing } = useSelector(
    (store: RootState) => store.searchUserReducer
  );

  const onFollow = async () => {
    setLoading(true)
    await dispatch(onFollowAction(_id, login_user._id, searchUserId) as any);
    setLoading(false)

  };
  console.log("LOGIN USER FOLLOWING", loginUserFollowing);
  console.log(login_user._id);
  const onUnFollow = async () => {
    setLoading(true)
    await dispatch(onUnFollowAction(_id, login_user._id, searchUserId) as any);
    setLoading(false)

  };
  if (login_user._id == _id) {
    return <></>;
  }
  if (loginUserFollowing.includes(_id)) {
    return (
      <Button
        onClick={onUnFollow}
        minW="70px"
        maxW="80px"
        size="sm"
        fontSize="sm"
        borderColor="green.800"
        borderRadius="lg"
      isLoading={loading}

      >
        Following
      </Button>
    );
  }
  return (
    <Button
      onClick={onFollow}
      colorScheme="facebook"
      minW="70px"
      maxW="80px"
      size="sm"
      fontSize="sm"
      borderColor="green.800"
      borderRadius="lg"
      isLoading={loading}
    >
      Follow
    </Button>
  );
};

export const EditProfileButton: React.FC<EditButtonProps> = ({ onOpen }) => {
  return (
    <Button
      size="sm"
      fontSize="sm"
      borderColor="green.800"
      borderRadius="lg"
      onClick={onOpen}
    >
      Edit profile
    </Button>
  );
};
export const ViewArchiveButton = () => {
  return (
    <Button size="sm" fontSize="sm" borderColor="green.800" borderRadius="lg">
      Archive
    </Button>
  );
};
export const MessageButton :  React.FC<MessageBtnProps> = ({_id}) => {
  return (
    
      <Button size="sm" fontSize="sm" borderColor="green.800" borderRadius="lg">
        Message
      </Button>
    
  );
};
