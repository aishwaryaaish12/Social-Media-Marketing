import { Box, Stack } from '@mui/material';
import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import SignUpForm from '../../Section/Auth/SignUp/SignUpForm';

function SignUp() {
  return (
    
<Stack
  direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={2}
  sx={{height:"100vh", backgroundColor: '#ABCDCD'}}
>
<Navbar/>

      <SignUpForm />
    </Stack>
  )
}

export default SignUp