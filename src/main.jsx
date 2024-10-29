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
import Users from './Compontent/Users/Users.jsx';
import UserDetles from './Compontent/UserDetles/UserDetles.jsx';
import Posts from './Compontent/Posts/Posts.jsx';
import PostDetles from './Compontent/PostDetles/PostDetles.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErorPage></ErorPage>,
    children: [
      {
        path: "/about",
        element: <About></About>
      },
      {
        path:'/user',
        loader:() =>fetch('https://jsonplaceholder.typicode.com/users'),
        element:<Users></Users>
      },
      {
        path:'/usres/:userId',
        loader:({params}) =>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element:<UserDetles></UserDetles>
      },
      {
        path: "/content",
        element: <Content></Content>
      },
      {
        path:'/posts',
        loader:() => fetch('https://jsonplaceholder.typicode.com/posts'),
        element:<Posts></Posts>
      },
      {
        path:'/posts/:postId',
        loader:({params}) =>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`), 
        element:<PostDetles></PostDetles>
      }
    ]
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
