import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const { isAuth } = useSelector((state) => state.userReducer);
  console.log(isAuth);
  return <div>Home</div>;
};

export default Home;
