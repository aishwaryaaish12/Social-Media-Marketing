import { Box, Stack } from '@mui/material';
import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import ServicesForm from '../../Section/Services/ServicesForm';

function Services() {
  return (
    
<Stack
  direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={2}
  sx={{height:"100vh", backgroundColor: '#ABCDCD'}}
>
<Navbar/>

      <ServicesForm />
    </Stack>
  )
}

export default Services