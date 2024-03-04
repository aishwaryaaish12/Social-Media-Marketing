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

const router = createBrowserRouter([
  {
    path: "/Login",
    element: <Home />,
  },
  {
    path: "/Signup",
    element: <SignUp />,
  },
  {
    path: "/",
    element: <FrontPage />,
  },




]);

function App() {
  
  return (
    <RouterProvider router={router} />
  );
}

export default App;