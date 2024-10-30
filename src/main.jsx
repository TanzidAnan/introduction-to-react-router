import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './Compontent/ErrorPage/ErrorPage';
import Home from './Compontent/Home/Home.jsx';
import About from './Compontent/About/About.jsx';
import Content from './Compontent/Content/Content.jsx';
import Users from './Compontent/Users/Users.jsx';
import UserDetles from './Compontent/UserDetles/UserDetles.jsx';
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
      },
      {
        path:'/content',
        element:<Content></Content>
      },
      {
        path:'/users',
        loader:() => fetch('https://jsonplaceholder.typicode.com/users'),
        element:<Users></Users>
      },
      {
        path:'/user/:userId',
        loader:({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element:<UserDetles></UserDetles>
      }
    ]
  },
])




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
