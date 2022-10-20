import React, { useEffect } from 'react';
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Button,
  Center,
} from '@chakra-ui/react';
import Layout from './ui/layout';
import StudentRegistrationForm from './forms/studentRegistrationForm';
import ViewBookingTable from './table/viewBookingTable';
import ViewStudentsTable from './table/viewStudentsTable';
import ViewFeedbackTable from './table/viewFeedbackTable';
import { Link } from 'react-router-dom';

const Home = () => {
  useEffect(() => {
    console.log(JSON.parse(localStorage.getItem('students')));
  }, []);
  return (
    <Layout>
      <Center>
        <Box>
          <Tabs>
            <Center>
              <TabList>
                <Tab>Add Student</Tab>
                <Tab>View Bookings</Tab>
                <Link to={'/viewStudentTable'}>
                  <Tab>View Students</Tab>
                </Link>
                <Tab>View Feedbacks</Tab>
                <Tab>
                  <Button>Logout</Button>
                </Tab>
              </TabList>
            </Center>

            <TabPanels>
              <TabPanel>
                <StudentRegistrationForm />
              </TabPanel>
              <TabPanel>
                <ViewBookingTable />
              </TabPanel>
              <TabPanel>
                <ViewStudentsTable />
              </TabPanel>
              <TabPanel>
                <ViewFeedbackTable />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Center>
    </Layout>
  );
};

export default Home;
