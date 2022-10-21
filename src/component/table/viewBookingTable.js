import React from 'react';
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
const ViewBookingTable = () => {
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
                  <Th>Section</Th>
                  <Th>Slot</Th>
                  <Th>Date</Th>
                  <Th>Start Time</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>inches</Td>
                  <Td>millimetres (mm)</Td>
                  <Td isNumeric>25.4</Td>
                  <Td>inches</Td>
                  <Td>millimetres (mm)</Td>
                  <Td isNumeric>25.4</Td>
                </Tr>
                <Tr>
                  <Td>inches</Td>
                  <Td>millimetres (mm)</Td>
                  <Td isNumeric>25.4</Td>
                  <Td>inches</Td>
                  <Td>millimetres (mm)</Td>
                  <Td isNumeric>25.4</Td>
                </Tr>
                <Tr>
                  <Td>inches</Td>
                  <Td>millimetres (mm)</Td>
                  <Td isNumeric>25.4</Td>
                  <Td>inches</Td>
                  <Td>millimetres (mm)</Td>
                  <Td isNumeric>25.4</Td>
                </Tr>
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th>Student Name</Th>
                  <Th>Class</Th>
                  <Th>Section</Th>
                  <Th>Slot</Th>
                  <Th>Date</Th>
                  <Th>Start Time</Th>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
        </Box>
      </Center>
    </Layout>
  );
};

export default ViewBookingTable;
