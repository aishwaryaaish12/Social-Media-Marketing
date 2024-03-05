import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { Box } from '@mui/material'
import Login from '../Auth/Login'
import SignUp from '../Auth/SignUp'
import FrontPage from '../FrontPage/FrontPage'
import Services from '../Services/Services'
import AboutUs from '../AboutUs/AboutUs'
import Contact from '../ContactUs/ContactUs'
function Home() {

  return (
    <Box>
        <Navbar />
        <Login />
        <SignUp />
        <FrontPage/>
        <Services />
        <AboutUs />
        <Contact />
      
      
    </Box> 
  )
}

export default Home