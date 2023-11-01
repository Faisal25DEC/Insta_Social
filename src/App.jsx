import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './routes/routes';
import { Alert, AlertIcon, Flex } from '@chakra-ui/react';
import Sidebar from './components/navbar/nav';

function App() {
  const [windowURL, setWindowURL] = useState(null);
  useEffect(()=>{
    setWindowURL(window.location.href);
  },[])
  
  return (
    <div className="App">
      <Flex gap={"18%"}>
     {window.location.href != 'http://localhost:3000/auth' &&  <Sidebar />}
      <Routes />
      </Flex>
    </div>
  );
}

export default App;
