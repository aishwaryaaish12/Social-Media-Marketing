import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { Box } from '@mui/material'
import Login from '../Auth/Login'
import SignUp from '../Auth/SignUp'
import FrontPage from '../FrontPage/FrontPage'
import Services from '../Services/Services'
import AboutUs from '../AboutUs/AboutUs'
function Home() {

  return (
    <Box>
        <Navbar />
        <Login />
        <SignUp />
        <FrontPage/>
        <Services />
        <AboutUs />
      
      
    </Box> 
  )
}

export default Home