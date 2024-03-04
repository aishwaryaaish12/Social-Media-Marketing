import { Box, Stack } from '@mui/material';
import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import FrontpageForm from '../../Section/Frontpage/FrontpageForm'

function FrontPage() {
  return (
    
<Stack
  direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={2}
  sx={{height:"100vh", backgroundColor: '#ABCDCD'}}
>
<Navbar/>

      <FrontpageForm />
    </Stack>
  )
}

export default FrontPage