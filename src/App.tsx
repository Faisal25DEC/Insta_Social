import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Box, Text } from "@chakra-ui/react";
import AllRoutes from "./routes/routes";

function App() {
  return (
    <Box>
      <AllRoutes />
    </Box>
  );
}

export default App;
