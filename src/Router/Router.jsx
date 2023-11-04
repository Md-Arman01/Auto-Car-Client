import {createBrowserRouter} from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Services from "../Pages/Services/Services";
import MyServices from "../Pages/MyServices/MyServices";
import AddServices from "../Pages/AddServices/AddServices";
import MySchedules from "../Pages/MySchedules/MySchedules";
import Login from "../Pages/Login/Login";
  
const Router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/services',
          element: <Services></Services>
        },
        {
          path: '/myServices',
          element: <MyServices></MyServices>
        },
        {
          path: '/addServices',
          element: <AddServices></AddServices>
        },
        {
          path: '/mySchedules',
          element: <MySchedules></MySchedules>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
      ]
    },
  ]);

export default Router;