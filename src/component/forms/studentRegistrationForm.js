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

const StudentRegistrationForm = ({ onSubmit }) => {
  const [studentName, setStudentName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [studentMobileNo, setStudentMobileNo] = useState('');
  const [studentEmail, setStudentEmail] = useState('');
  const [studentClass, setStudentClass] = useState('');
  const [studentDOB, setStudentDOB] = useState('');
  const [studentGender, setStudentGender] = useState('');
  // const [studentData, setStudentData] = useState([]);

  const setHandler = e => {
    e.preventDefault();
    console.log('asad');
    console.log(studentName);
    setStudentClass(studentClass);
    setStudentDOB(studentDOB);
    setStudentEmail(studentEmail);
    setStudentGender(studentGender);
    setStudentId(studentId);
    setStudentMobileNo(studentMobileNo);
    setStudentName(studentName);
  };

  return (
    <Center>
      <Box>
        <form
          onSubmit={() =>
            onSubmit(
              studentClass,
              studentDOB,
              studentEmail,
              studentGender,
              studentId,
              studentMobileNo,
              studentName
            )
          }
        >
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
            <Button type="submit" onClick={e => setHandler(e)}>
              Submit
            </Button>
          </Center>
        </form>
      </Box>
    </Center>
  );
};

export default StudentRegistrationForm;
