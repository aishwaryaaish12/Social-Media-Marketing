import { Box, Stack } from '@mui/material';
import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import LoginForm from '../../Section/Auth/Login/LoginForm';

function Login() {
  return (
    
<Stack
  direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={2}
  sx={{height:"100vh", backgroundColor: '#ABCDCD'}}
>
<Navbar/>
      <LoginForm />
    </Stack>
  )
}

export default Login