import {createBrowserRouter} from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Services from "../Pages/Services/Services";
import MyServices from "../Pages/MyServices/MyServices";
import AddServices from "../Pages/AddServices/AddServices";
import MySchedules from "../Pages/MySchedules/MySchedules";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import SingleServicesCard from "../Pages/Home/SingleServicesCard";
import UpdateServicesCard from "../Pages/MyServices/UpdateServicesCard";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
  
const Router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement: <ErrorPage></ErrorPage>,
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
          element: <PrivateRoute><MyServices></MyServices></PrivateRoute>,
          
        },
        {
          path: '/addServices',
          element: <PrivateRoute><AddServices></AddServices></PrivateRoute>
        },
        {
          path: '/mySchedules',
          element: <PrivateRoute><MySchedules></MySchedules></PrivateRoute> 
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/service/:id',
          element: <PrivateRoute><SingleServicesCard></SingleServicesCard></PrivateRoute>
        },
        {
          path: '/update/:id',
          element: <PrivateRoute><UpdateServicesCard></UpdateServicesCard></PrivateRoute>
        },
      ]
    },
  ]);

export default Router;