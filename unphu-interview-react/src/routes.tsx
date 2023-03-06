import path from "path";
import {
    createBrowserRouter, Navigate,
  } from "react-router-dom";
import AddUserForm from "./app/User/AddUserForm";
import Home from "./app/Home";
import Login from "./app/Login";
import UserList from "./app/User/UserList";


const routes = createBrowserRouter([
  {
    path:'/',
    element:<Navigate to="/app" />
  },
    {
        path: "/app",
        element: <Home/>,
        children:[{
            path:"/app/add-user",
            element:<AddUserForm/>
        },
        {
            path:"/app/user-list",
            element:<UserList/>
        }
            
        ]
      },
    {
      path: "/login",
      element: <Login/>,
    },
  ]);


export default routes