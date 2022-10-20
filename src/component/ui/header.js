import { border, Box, Center, Heading, Image } from '@chakra-ui/react';
import React from 'react';
import { headerParkingImg } from '../../assets/images/headerParkingImg.jpg';

const Header = () => {
  return (
    <Box style={{ position: 'relative' }}>
      <Image
        src="https://images.unsplash.com/photo-1506521781263-d8422e82f27a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        width={'100%'}
        height={'400px'}
      />
      <Center>
        <Center
          p={5}
          color="black"
          style={{
            position: 'absolute',
            bottom: '12px',
            border: '4px solid black',
          }}
        >
          <Heading>Online Car Parking App</Heading>
        </Center>
      </Center>
    </Box>
  );
};

export default Header;
