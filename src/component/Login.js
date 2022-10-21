import { Heading } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import LoginForm from './forms/loginForm';
import Header from './ui/header';
import Layout from './ui/layout';

const Login = () => {
  return (
    <Layout>
      <LoginForm />
    </Layout>
  );
};

export default Login;
