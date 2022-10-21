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
} from '@chakra-ui/react';

const ViewStudentsTable = ({ studentData }) => {
  const [registeredStudent, setRegisteredStudent] = useState([]);
  console.log(studentData);
  useEffect(() => {
    const getStudentData = JSON.parse(localStorage.getItem('students'));
    console.log(getStudentData);
    setRegisteredStudent([getStudentData]);
  }, []);
  console.log(JSON.parse(localStorage.getItem('students')));
  return (
    <Box>
      <TableContainer>
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
            <Tr>
              <Td>asad</Td>
              <Td>FY</Td>
              <Td>030023294089</Td>
              <Td>asad@gmail.com</Td>
              <Td>22/09/1998</Td>
              <Td>Male</Td>
            </Tr>
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
  );
};

export default ViewStudentsTable;
