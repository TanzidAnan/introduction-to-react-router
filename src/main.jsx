import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './Compontent/Header.jsx';
import ErorPage from './ErorPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
    errorElement:<ErorPage></ErorPage>
  },
  {
    path: "/about",
    element: <div>about me</div>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
