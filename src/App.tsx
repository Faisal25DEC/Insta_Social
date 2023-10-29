import React from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './routes/routes';
import { Alert, AlertIcon } from '@chakra-ui/react';
import Sidebar from './components/navbar/nav';

function App() {
  
  return (
    <div className="App">
      <Sidebar />
      <Routes />
    </div>
  );
}

export default App;
