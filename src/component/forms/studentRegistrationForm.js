import React, { useEffect, useState } from 'react';
import {
  Box,
  Grid,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  RadioGroup,
  HStack,
  Radio,
  Button,
  FormErrorMessage,
  FormHelperText,
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

const StudentRegistrationForm = ({ onSubmit }) => {
  const [studentName, setStudentName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [studentMobileNo, setStudentMobileNo] = useState('');
  const [studentEmail, setStudentEmail] = useState('');
  const [studentClass, setStudentClass] = useState('');
  const [studentDOB, setStudentDOB] = useState('');
  const [studentGender, setStudentGender] = useState('');
  const [studentData, setStudentData] = useState(getLocalStudents());

  const submitHandler = e => {
    e.preventDefault();
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
    setStudentClass('');
    setStudentDOB('');
    setStudentEmail('');
    setStudentGender('');
    setStudentId('');
    setStudentMobileNo('');
    setStudentName('');
  };
  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(studentData));
  }, [studentData]);

  return (
    <Layout>
      <Center>
        <Box>
          <Navbar />
          <form onSubmit={submitHandler} style={{ marginTop: '30px' }}>
            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
              <GridItem w="100%">
                <FormControl isRequired>
                  <FormLabel>Student ID</FormLabel>
                  <Input
                    placeholder="Student Id"
                    value={studentId}
                    onChange={e => setStudentId(e.target.value)}
                  />
                </FormControl>
              </GridItem>
              <GridItem w="100%">
                <FormControl isRequired>
                  <FormLabel>Student Name</FormLabel>
                  <Input
                    placeholder="Student Name"
                    value={studentName}
                    onChange={e => setStudentName(e.target.value)}
                  />
                </FormControl>
              </GridItem>
              <GridItem w="100%">
                <FormControl isRequired>
                  <FormLabel>Mobile Number</FormLabel>
                  <Input
                    type="number"
                    placeholder="0300-3322323"
                    value={studentMobileNo}
                    onChange={e => setStudentMobileNo(e.target.value)}
                  />
                </FormControl>
              </GridItem>
              <GridItem w="100%">
                <FormControl isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    placeholder="abc@email.com"
                    value={studentEmail}
                    onChange={e => setStudentEmail(e.target.value)}
                  />
                </FormControl>
              </GridItem>
              <GridItem w="100%">
                <FormControl isRequired>
                  <FormLabel>Class</FormLabel>
                  <Input
                    type="text"
                    placeholder="FY"
                    value={studentClass}
                    onChange={e => setStudentClass(e.target.value)}
                  />
                </FormControl>
              </GridItem>
              <GridItem w="100%">
                <FormControl isRequired>
                  <FormLabel>DOB</FormLabel>
                  <Input
                    type="date"
                    value={studentDOB}
                    onChange={e => setStudentDOB(e.target.value)}
                  />
                </FormControl>
              </GridItem>
              <GridItem w="100%">
                <FormControl isRequired>
                  <FormLabel>Gender</FormLabel>
                  <RadioGroup defaultValue="male">
                    <HStack spacing="24px">
                      <Radio
                        value="male"
                        onChange={e => setStudentGender(e.target.value)}
                      >
                        Male
                      </Radio>
                      <Radio
                        value="female"
                        onChange={e => setStudentGender(e.target.value)}
                      >
                        Female
                      </Radio>
                    </HStack>
                  </RadioGroup>
                </FormControl>
              </GridItem>
            </Grid>
            <Center marginTop={5} marginBottom={5}>
              <Button type="submit">Submit</Button>
            </Center>
          </form>
        </Box>
      </Center>
    </Layout>
  );
};

export default StudentRegistrationForm;
