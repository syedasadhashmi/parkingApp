import {
  Box,
  Button,
  Center,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from '@chakra-ui/react';
import React from 'react';

const LoginForm = () => {
  return (
    <Center backgroundColor={'#fff'}>
      <Box
        p={5}
        style={{ margin: '20px 0px', width: '400px' }}
        backgroundColor={'#fff'}
        borderRadius="10"
        boxShadow={'lg'}
      >
        <Center>
          <Heading>Login</Heading>
        </Center>
        <Divider />
        <form style={{ margin: '10px 0px' }}>
          <FormControl>
            <FormLabel for="username">Username</FormLabel>
            <Input type="text" name="username" id="username" />
          </FormControl>
          <FormControl>
            <FormLabel for="password">Password</FormLabel>
            <Input type="text" name="password" id="password" />
          </FormControl>
          <Center style={{ margin: '10px 0px' }}>
            <Button>Login</Button>
          </Center>
        </form>
      </Box>
    </Center>
  );
};

export default LoginForm;
