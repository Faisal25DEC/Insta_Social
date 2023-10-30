import React from "react";
import { Route, Routes } from "react-router-dom";
import Profile from "../pages/profile/profile";
import Follower from "../pages/folloNfollower/follower";
import Following from "../pages/folloNfollower/following";


const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/profile/:userId" element={<Profile />} />
      <Route path="/profile/follower/:userId" element={<Follower />} />
      <Route path="/profile/following/:userId" element={<Following />} />
    </Routes>
  );
};

export default AllRoutes;