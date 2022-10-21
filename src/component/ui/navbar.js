import React from 'react';
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

import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const navLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
    };
  };
  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={3}>
      <GridItem w="100%">
        <NavLink to={'/studentRegistration'}>
          <Button>Register Student</Button>
        </NavLink>
      </GridItem>
      <GridItem w="100%">
        <NavLink to={'/viewBookingTable'}>
          <Button>Booking Details</Button>
        </NavLink>
      </GridItem>
      <GridItem w="100%">
        <NavLink to={'/viewStudentTable'}>
          <Button>View Students</Button>
        </NavLink>
      </GridItem>
      <GridItem w="100%">
        <NavLink to={'/viewFeedbackTable'}>
          <Button>View Feedback</Button>
        </NavLink>
      </GridItem>
      <GridItem w="100%">
        <Button>Logout</Button>
      </GridItem>
    </Grid>
  );
};

export default Navbar;
