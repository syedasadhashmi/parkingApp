import React, { useEffect, useState } from 'react';
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Button,
  Center,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import Layout from './ui/layout';
import StudentRegistrationForm from './forms/studentRegistrationForm';
import ViewBookingTable from './table/viewBookingTable';
import ViewStudentsTable from './table/viewStudentsTable';
import ViewFeedbackTable from './table/viewFeedbackTable';
import { Link } from 'react-router-dom';
import Navbar from './ui/navbar';

const Home = props => {
  return (
    <Layout>
      <Center>
        <Navbar />
      </Center>
    </Layout>
  );
};

export default Home;
