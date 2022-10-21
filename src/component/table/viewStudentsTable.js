import React, { useEffect, useState } from 'react';
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Center,
} from '@chakra-ui/react';
import Layout from '../ui/layout';
import Navbar from '../ui/navbar';

const getLocalStudents = () => {
  let studentList = localStorage.getItem('students');
  if (studentList) {
    return JSON.parse(localStorage.getItem('students'));
  } else {
    return [];
  }
};

const ViewStudentsTable = () => {
  const [registeredStudent, setRegisteredStudent] = useState(
    getLocalStudents()
  );
  // useEffect(() => {
  //   const getStudentData = JSON.parse(localStorage.getItem('students'));
  //   console.log(getStudentData);
  //   setRegisteredStudent([getStudentData]);
  // }, []);
  return (
    <Layout>
      <Center>
        <Box>
          <Navbar />
          <TableContainer style={{ marginTop: '30px' }}>
            <Table variant="simple">
              <TableCaption>Imperial to metric conversion factors</TableCaption>
              <Thead>
                <Tr>
                  <Th>Student Name</Th>
                  <Th>Class</Th>
                  <Th>Mobile No</Th>
                  <Th>Email id</Th>
                  <Th>DOB</Th>
                  <Th>Gender</Th>
                </Tr>
              </Thead>
              <Tbody>
                {console.log(registeredStudent)}
                {registeredStudent.map(item => (
                  <Tr key={item.password}>
                    <Td>{item.studentName}</Td>
                    <Td>{item.studentClass}</Td>
                    <Td>{item.studentMobileNo}</Td>
                    <Td>{item.studentEmail}</Td>
                    <Td>{item.studentDOB}</Td>
                    <Td>{item.studentGender}</Td>
                  </Tr>
                ))}
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th>Student Name</Th>
                  <Th>Class</Th>
                  <Th>Mobile No</Th>
                  <Th>Email id</Th>
                  <Th>DOB</Th>
                  <Th>Gender</Th>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
        </Box>
      </Center>
    </Layout>
  );
};

export default ViewStudentsTable;
