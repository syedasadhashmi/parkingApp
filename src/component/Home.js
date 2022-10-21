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
} from '@chakra-ui/react';
import Layout from './ui/layout';
import StudentRegistrationForm from './forms/studentRegistrationForm';
import ViewBookingTable from './table/viewBookingTable';
import ViewStudentsTable from './table/viewStudentsTable';
import ViewFeedbackTable from './table/viewFeedbackTable';
import { Link } from 'react-router-dom';

const Home = props => {
  const [studentData, setStudentData] = useState([]);

  function submitHandler(
    e,
    studentClass,
    studentData,
    studentDOB,
    studentEmail,
    studentGender,
    studentId,
    studentMobileNo,
    studentName
  ) {
    e.preventDefault();
    console.log('dasa');

    const singleStudentData = {
      studentGender: studentGender,
      studentDOB: studentDOB,
      studentClass: studentClass,
      studentEmail,
      studentId,
      studentMobileNo,
      studentName,
      password: new Date().getTime().toString(),
    };
    setStudentData([...studentData, singleStudentData]);
    console.log(studentData);
  }
  return (
    <Layout>
      <Center>
        <Box>
          <Tabs>
            <Center>
              <TabList>
                <Tab>Add Student</Tab>
                <Tab>View Bookings</Tab>
                <Tab>View Students</Tab>
                <Tab>View Feedbacks</Tab>
                <Tab>
                  <Button>Logout</Button>
                </Tab>
              </TabList>
            </Center>

            <TabPanels>
              <TabPanel>
                <StudentRegistrationForm onSubmit={submitHandler} />
              </TabPanel>
              <TabPanel>
                <ViewBookingTable />
              </TabPanel>
              <TabPanel>
                <ViewStudentsTable studentData={studentData} />
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
