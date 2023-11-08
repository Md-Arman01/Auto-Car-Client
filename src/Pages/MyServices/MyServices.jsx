import useAuth from "../../Hooks/useAuth";
import MyServicesCard from "./MyServicesCard";
import { useState } from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { ImCancelCircle } from 'react-icons/im';
import Footer from "../Home/Footer";

const MyServices = () => {
  const { user } = useAuth();

  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`https://assignment-11-server-phi-one.vercel.app/services1/${user?.email}` ,{credentials: 'include'})
      .then((res) => res.json())
      .then((res) => setServices(res));
  }, [user?.email]);

  return (
    <>
    <Helmet>
      <title>Auto Car | My Services</title>
    </Helmet>
      <div className="my-5 md:my-12">
        {
            services.length > 0 ?
            <div>
        <div className="flex justify-center">
          <h1 className="text-3xl md:text-5xl bg-gradient-to-tr from-[#54C2C3] to-[#00463E] text-transparent bg-clip-text font-rancho font-semibold mb-5 md:mb-12">
            My Services: {services.length}
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-5 lg:px-0 container mx-auto">
          {services?.map((service) => (
              <MyServicesCard
              key={service._id}
              service={service}
              services={services}
              setServices={setServices}></MyServicesCard>
              ))}
        </div>
        </div>
        :
        <div className="flex flex-col items-center justify-center h-screen gap-5">
              <h1 className="font-rancho text-3xl md:text-4xl lg:text-6xl bg-gradient-to-tr from-[#54C2C3] to-[#00463E] text-transparent bg-clip-text">Service Not Found</h1>
              <ImCancelCircle className="text-3xl md:text-4xl lg:text-5xl text-[#54C2C3]"></ImCancelCircle>
            </div>

            
        }
        
      </div>
      <Footer></Footer>
    </>
  );
};

export default MyServices;
