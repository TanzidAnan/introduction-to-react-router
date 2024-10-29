import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import Header from './Compontent/Header.jsx';
import ErorPage from './ErorPage.jsx';
import Home from './Compontent/Home/Home.jsx';
import About from './Compontent/About/About.jsx';
import Content from './Compontent/Content/Content.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErorPage></ErorPage>,
    children : [
      {
        path : "/about",
        element: <About></About>
      },
      {
        path:"/content",
        element:<Content></Content>
      }
    ]
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
