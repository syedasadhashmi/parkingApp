import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Login from './component/Login';
import { Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import ViewStudentsTable from './component/table/viewStudentsTable';
import ViewFeedbackTable from './component/table/viewFeedbackTable';
import ViewBookingTable from './component/table/viewBookingTable';
import StudentRegistrationForm from './component/forms/studentRegistrationForm';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          index
          path="/studentRegistration"
          element={<StudentRegistrationForm />}
        />
        <Route path="/viewStudentTable" element={<ViewStudentsTable />} />
        <Route path="/viewFeedbackTable" element={<ViewFeedbackTable />} />
        <Route path="/viewBookingTable" element={<ViewBookingTable />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
