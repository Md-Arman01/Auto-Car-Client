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
          // path: '/myServices',
          path: '/myServices/:email',
          element: <MyServices></MyServices>,
          loader: ({params}) => fetch(`http://localhost:5000/services1/${params.email}`)
          
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
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/service/:id',
          element: <SingleServicesCard></SingleServicesCard>
        },
        {
          path: '/update/:id',
          element: <UpdateServicesCard></UpdateServicesCard>
        },
      ]
    },
  ]);

export default Router;