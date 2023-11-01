import { Button } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getLoginUserFollowing,
  getUserAllDetailAction,
  onFollowAction,
} from "../../redux/search_user/search_user.action";
import { useParams } from "react-router-dom";
// import Cookies from "js-cookie";
interface FollowBtnProps {
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
interface RouteParams {
  userId: string;
}

// const loginUserFollowing: string[] = ["2", "2", "3"];
// const loginUserId = '6541fdace61629b35627c795'
const loginUserId: any = "6541fdace61629b35627c795";

// const token: string = Cookies.get("insta_token");

export const FollowButton: React.FC<FollowBtnProps> = ({ _id }) => {
  const dispatch = useDispatch();
  const { userId } = useParams();

  const { loginUserFollowing } = useSelector(
    (store: RootState) => store.searchUserReducer
  );

  const onFollow = async () => {
    dispatch(onFollowAction(_id) as any);
    dispatch(getLoginUserFollowing("6541fdace61629b35627c795") as any);
    dispatch(getUserAllDetailAction(userId) as any);
  };

  const onUnFollow = async () => {
    const header: { Authorization: string } = {
      Authorization:
        `Bearer ${process.env.REACT_APP_TOKEN}`,
    };
    // console.log(_id)
    console.log(header);
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_PORT}/followers/${_id}`,

        {
          headers: header,
        }
      );
      console.log(response);
      // dispatch(onFollowAction(_id) as any);

      dispatch(getLoginUserFollowing("6541fdace61629b35627c795") as any);
      dispatch(getUserAllDetailAction(userId) as any);
    } catch (error) {
      console.log(error);
    }
  };
  if (loginUserId == _id) {
    return <></>;
  }
  if (loginUserFollowing.includes(_id)) {
    return (
      <Button
        onClick={onUnFollow}
        minW="80px"
        maxW="80px"
        size="sm"
        fontSize="sm"
        borderColor="green.800"
        borderRadius="lg"
      >
        Following
      </Button>
    );
  }
  return (
    <Button
      onClick={onFollow}
      colorScheme="facebook"
      minW="80px"
      maxW="80px"
      size="sm"
      fontSize="sm"
      borderColor="green.800"
      borderRadius="lg"
    >
      Follow
    </Button>
  );
};

export const EditProfileButton = () => {
  return (
    <Button size="sm" fontSize="sm" borderColor="green.800" borderRadius="lg">
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
export const MessageButton = () => {
  return (
    <Button size="sm" fontSize="sm" borderColor="green.800" borderRadius="lg">
      Message
    </Button>
  );
};
