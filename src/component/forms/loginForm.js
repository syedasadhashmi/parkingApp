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
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import StudentRegistrationForm from './studentRegistrationForm';

const getLocalAdmin = () => {
  let adminList = localStorage.getItem('admin');
  if (adminList) {
    return JSON.parse(localStorage.getItem('admin'));
  } else {
    return [];
  }
};

const LoginForm = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [adminStatus, setAdminStatus] = useState(false);
  const [adminData, setAdminData] = useState(getLocalAdmin());

  const submitHandler = e => {
    e.preventDefault();
    if (!id && !password) {
      return alert('Please Enter Login and Password');
    } else if (adminData[0].id !== id && adminData[0].password !== password) {
      return alert('Incorrect Email or Password');
    } else {
      alert('Login as Admin');
      setId('');
      setPassword('');
    }
  };

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
        <form style={{ margin: '10px 0px' }} onSubmit={submitHandler}>
          <FormControl>
            <FormLabel for="username">Username</FormLabel>
            <Input
              type="text"
              name="username"
              id="username"
              value={id}
              onChange={e => setId(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel for="password">Password</FormLabel>
            <Input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </FormControl>
          <Center style={{ margin: '10px 0px' }}>
            <Button type="submit">Login</Button>
          </Center>
        </form>
      </Box>
    </Center>
  );
};

export default LoginForm;
