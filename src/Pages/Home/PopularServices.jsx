import { Typewriter } from 'react-simple-typewriter'
import useAxios from "../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import ServicesCard from "./ServicesCard";
import { useNavigate } from "react-router-dom";



const PopularServices = () => {
    const axiosSecure = useAxios()
    const navigate = useNavigate()

    const handleShowAll = () => {
        navigate('/services')
        
    }
    
    const { data: services} = useQuery({
        queryKey: ['services'],
        queryFn: async () =>{
        return await axiosSecure.get('/services')
        }
      })

    
    return (
        <div>
            <div className="my-5 lg:my-14 px-6 lg:px-0">
                <h1 className="text-4xl md:text-5xl lg:text-5xl font-rancho font-semibold text-center">Popular <span className="bg-gradient-to-tr from-[#54C2C3] to-[#00463E] text-transparent bg-clip-text">
                    
                    <Typewriter
            words={['Services']}
            loop={100}
            cursor
            cursorStyle=''
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
                    </span></h1>
                <p className="text-sm text-gray-500 text-center mx-auto md:w-[650px] my-5">It is a cost-effective and flexible alternative to traditional taxi services, with options like Uber, Lyft, and others available in many locations.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 container mx-auto px-6 lg:px-0">
            {
                
                services?.data?.slice(0, 4).map(service => <ServicesCard key={service._id} service={service}></ServicesCard>)
                
            }
            </div>
            <button
                  className="normal-case block w-40 mx-auto select-none rounded-lg bg-gradient-to-tr from-[#54C2C3] to-[#00463E] py-3 px-6 my-8 text-center align-middle font-rancho text-xl   text-white shadow-md shadow-[#54C2C3]/20 transition-all hover:shadow-lg hover:shadow-[#54C2C3]/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  onClick={handleShowAll}
                  data-ripple-light="true">
                  Show All
            </button>

        </div>
    );
};

export default PopularServices;