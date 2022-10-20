import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Login from './component/Login';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Login />
    </ChakraProvider>
  );
}

export default App;
