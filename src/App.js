import logo from './logo.svg';
import './App.css';

import {createBrowserRouter , RouterProvider } from 'react-router'
import LoginPage from "../src/components/Login";
import SignUp from "../src/components/SignUp";


function App() {
const routes = createBrowserRouter([
  {
    path:"/",
    element:<LoginPage />
  },
  {
    path:"/signup",
    element:<SignUp />
  }
])

  return (
    <>
    <RouterProvider router={routes} />
    </>
    
    
  );
}

export default App;
