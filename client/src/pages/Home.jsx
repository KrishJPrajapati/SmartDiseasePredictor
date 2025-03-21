import React from 'react';
import Box from '@mui/material/Box';
import Navbar from '../componets/Navbar';
import SymptomsForm from '../componets/SymptomsForm';

const Home = () => {
  return (
    <Box>
      
      <Navbar></Navbar>
      <SymptomsForm></SymptomsForm>
    </Box>
  );
};

export default Home;
