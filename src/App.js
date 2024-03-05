import { Container } from '@mui/material';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home';
import SignUp from './Pages/Auth/SignUp';
import FrontPage from './Pages/FrontPage/FrontPage';
import Services from './Pages/Services/Services';
import AboutUs from './Pages/AboutUs/AboutUs';
import Login from './Pages/Auth/Login';

const router = createBrowserRouter([
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Signup",
    element: <SignUp />,
  },
  {
    path: "/",
    element: <FrontPage />,
  },
  {
    path: "/Services",
    element: <Services />,
  },
  {
    path: "/AboutUs",
    element: <AboutUs />,
  },




  





]);

function App() {
  
  return (
    <RouterProvider router={router} />
  );
}

export default App;