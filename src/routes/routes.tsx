import React from "react";
import { Route, Routes } from "react-router-dom";
import Profile from "../pages/profile/profile";
import Follower from "../pages/folloNfollower/follower";
import Following from "../pages/folloNfollower/following";
import Home from "../pages/home/Home";
import Login from "./../components/login_signup/login_signup";
import Messages from "../pages/messaging/Messages";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/profile/:userId" element={<Profile />} />
      <Route path="/profile/follower/:userId" element={<Follower />} />
      <Route path="/profile/following/:userId" element={<Following />} />
      <Route path="/auth" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/messages" element={<Messages />} />
    </Routes>
  );
};

export default AllRoutes;
