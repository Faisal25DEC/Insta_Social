import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Routes from "./routes/routes";
import { Alert, AlertIcon, Box, Flex } from "@chakra-ui/react";
import Sidebar from "./components/navbar/nav";

function App() {
  return (
    <Box>
      <Sidebar />
      <Routes />
    </Box>
  );
}

export default App;
