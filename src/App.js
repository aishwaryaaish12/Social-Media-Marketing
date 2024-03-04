import { Container } from '@mui/material';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home';
import SignUp from './Pages/Auth/SignUp';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Signup",
    element: <SignUp />,
  },


]);

function App() {
  
  return (
    <RouterProvider router={router} />
  );
}

export default App;