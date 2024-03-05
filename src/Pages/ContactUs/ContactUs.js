import React from 'react'
import { Box, Stack } from '@mui/material';
import Navbar from '../../Components/Navbar/Navbar';
import ContactForm from '../../Section/ContactUs/ContactUsForm'


function ContactUs() {
  return (
    <Stack
  direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={0}
  sx={{height:"100vh", backgroundColor: '#ABCDCD', overflow:'hidden'}}
>
  <Navbar />

      <ContactForm />
    </Stack>
  )
}

export default ContactUs