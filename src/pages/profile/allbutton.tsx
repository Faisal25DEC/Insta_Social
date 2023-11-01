import { Button } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
// import Cookies from "js-cookie";
interface FollowBtnProps {
  _id: any;
}
interface LogedInUserRootState {
  // searchUserReducer: {
  //   searchUserDetail: any;
  //   searchUserFollower: any[];
  //   searchUserFollowing: any[];
  //   searchUserPosts: any[];
  // };
}
const loginUserFollowing: string[] = ["2", "2", "3"];
// const loginUserId = '6541fd88e61629b35627c78f'
const loginUserId: any = "6541fd88e61629b35627c78f";

// const token: string = Cookies.get("insta_token");

export const FollowButton: React.FC<FollowBtnProps> = ({ _id }) => {
  console.log("button", _id);
  const onFollow = async () => {
    const header: { Authorization: string } = {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTQxZmQ4OGU2MTYyOWIzNTYyN2M3OGYiLCJpYXQiOjE2OTg4MjcxNjN9.58YTwjnh3lrIWiE48C0s_Jz7tx0LaJsJLtgRDwJ_IPY",
    };
    // console.log(_id)
    console.log(header);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_PORT}/followers/${_id}`,
        {},
        {
          headers: header,
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const onUnFollow = async() => {
    const header: { Authorization: string } = {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTQxZmQ4OGU2MTYyOWIzNTYyN2M3OGYiLCJpYXQiOjE2OTg4MjcxNjN9.58YTwjnh3lrIWiE48C0s_Jz7tx0LaJsJLtgRDwJ_IPY",
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
