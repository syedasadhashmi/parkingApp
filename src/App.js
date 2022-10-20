import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Login from './component/Login';
import { Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import ViewStudentsTable from './component/table/viewStudentsTable';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/viewStudentTable" element={<ViewStudentsTable />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
