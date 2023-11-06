// import { useQuery } from "@tanstack/react-query";
// import useAuth from "../../Hooks/useAuth";
// import useAxios from "../../Hooks/useAxios";

import { useLoaderData } from "react-router-dom";
import MyServicesCard from "./MyServicesCard";




const MyServices = () => {
    const services = useLoaderData()


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 container mx-auto">
            {
                services?.map(service => <MyServicesCard key={service._id} service={service}></MyServicesCard>)
            }
        </div>
    );
};

export default MyServices;