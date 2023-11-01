import React from 'react'
import { Routes as ReactRoutes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import Login from '../components/login_signup/login_signup';
const Routes:React.FC = () => {
  return (
    <div>
        <ReactRoutes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<Login />} />
        </ReactRoutes>
    </div>
  )
}

export default Routesimport React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/home";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default AllRoutes;
