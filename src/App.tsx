import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AllRoutes from "./routes/routes";
import Home from "./pages/home/Home";
import Sidebar from "./components/navbar/nav";

function App() {
  return (
    <>
      <Sidebar />
      <AllRoutes />
    </>
  );
}

export default App;
