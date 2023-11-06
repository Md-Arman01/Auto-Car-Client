// import { useQuery } from "@tanstack/react-query";
// import useAuth from "../../Hooks/useAuth";
// import useAxios from "../../Hooks/useAxios";

import { useLoaderData } from "react-router-dom";

import MyServicesCard from "./MyServicesCard";

const MyServices = () => {
    const services = useLoaderData()

    // const {user} = useAuth()
    // const axiosSecure = useAxios()

    // const {data} = useQuery({
    //     queryKey: 'services',
    //     queryFn: ()=> {
    //         axiosSecure.get(`/services1/${user?.email}`)
    //     }
    // })
    // console.log(data?.data)



    return (
        <>
        <div className="my-12">
        <div className="flex justify-center">
            <h1 className="text-5xl bg-gradient-to-tr from-[#54C2C3] to-[#00463E] text-transparent bg-clip-text font-rancho font-semibold mb-12">My Services: {services.length}</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 container mx-auto">
            {
                services?.map(service => <MyServicesCard key={service._id} service={service}></MyServicesCard>)
            }
        </div>
            </div>
        </>
    );
};

export default MyServices;