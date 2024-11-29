import {
    createBrowserRouter,} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Error from "../Pages/Error";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <h1>hi</h1>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        // {
        //   path: "/",
        //   element: <h1>hi</h1>,
        // },
      ],
    },
    {
        path:'*',
        element:<Error></Error>
      },
  ]);