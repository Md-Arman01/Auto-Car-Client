
import useAuth from "../../Hooks/useAuth";
import MyServicesCard from "./MyServicesCard";
import { useState } from "react";
import { useEffect } from "react";

const MyServices = () => {
    const {user} = useAuth()
    
    const [services, setServices] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:5000/services1/${user?.email}`)
        .then(res => res.json())
        .then(res => setServices(res))
    },[user?.email])
    


    return (
        <>
        <div className="my-12">
        <div className="flex justify-center">
            <h1 className="text-5xl bg-gradient-to-tr from-[#54C2C3] to-[#00463E] text-transparent bg-clip-text font-rancho font-semibold mb-12">My Services: {services.length}</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 container mx-auto">
            {
                services?.map(service => <MyServicesCard key={service._id} service={service} services={services} setServices={setServices}></MyServicesCard>)
            }
        </div>
            </div>
        </>
    );
};

export default MyServices;