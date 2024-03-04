import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { Box } from '@mui/material'
import Login from '../Auth/Login'
import SignUp from '../Auth/SignUp'


function Home() {

  return (
    <Box>
        <Navbar />
        <Login />
        <SignUp />
    </Box> 
  )
}

export default Home