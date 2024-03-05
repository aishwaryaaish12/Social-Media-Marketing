import { Box, Stack } from '@mui/material';
import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import AboutUsForm from '../../Section/AboutUs/AboutUsForm';

function AboutUs() {
  return (
    
<Stack
  direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={2}
  sx={{height:"100vh", backgroundColor: '#ABCDCD'}}
>
<Navbar/>

      <AboutUsForm />
    </Stack>
  )
}

export default AboutUs