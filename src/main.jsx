import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffe from './components/AddCoffe/AddCoffe.jsx';
import Updatecoffe from './components/UpdateCoffe/Updatecoffe.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
  },
  {
    path : "/addCoffe",
    element : <AddCoffe></AddCoffe>
  },
  {
    path : "/updateCoffe",
    element : <Updatecoffe></Updatecoffe>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
