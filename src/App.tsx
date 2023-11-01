import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Box, Text } from "@chakra-ui/react";
import AllRoutes from "./routes/routes";
import Routes from "./routes/routes";
import { Alert, AlertIcon, Flex } from "@chakra-ui/react";
import Sidebar from "./components/navbar/nav";

function App() {
  return (
    <div className="App">
      <Flex gap={"18%"}>
        <Sidebar />
        <Routes />
      </Flex>
    </div>
  );
}

export default App;
