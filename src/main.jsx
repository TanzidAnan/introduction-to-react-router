import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './Compontent/ErrorPage/ErrorPage';
import Home from './Compontent/Home/Home.jsx';
import About from './Compontent/About/About.jsx';
// import Header from './Compontent/Header.jsx';


const router =createBrowserRouter ([
  {
    path:'/',
    errorElement:<ErrorPage></ErrorPage>,
    element:<Home></Home>,
    children:[
      {
        path:'/about',
        element:<About></About>
      }
    ]
  },
  {
    path:'/about',
    element:<div>my about pagr</div>
  },
  {
    path:'/contact',
    element:<div>contact page</div>
  }
])




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
