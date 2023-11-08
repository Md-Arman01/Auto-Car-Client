import { useQuery } from "@tanstack/react-query";
import useAxios from "../../Hooks/useAxios";
import AllServicesCard from "./AllServicesCard";
import { useState } from "react";
import SearchCard from "./SearchCard";
import { Helmet } from "react-helmet-async";
import Footer from "../Home/Footer";




const Services = () => {
  const axiosSecure = useAxios()
  const [seeAll, setSeeAll] = useState(false)
  const [searchField, setSearchField] = useState('')

  const { data: services} = useQuery({
    queryKey: ['services'],
    queryFn: async () =>{
    return await axiosSecure.get('/services')
    }
  })
  
  const handleSearch = (e)=> {
    e.preventDefault()
    const form = e.target;
    const search = form.search.value;
    setSearchField(search)
    form.reset()
  }
  const similarService = services?.data?.filter(service => service.services_name === searchField)


  return (
    <>
    <div className="container mx-auto min-h-screen">
      <Helmet>
        <title>Auto Car | Services</title>
      </Helmet>
      <div className=" mt-11 px-60">
        <form onSubmit={handleSearch}>
          <div className="input-group">
            <input
              type="text"
              name="search"
              placeholder="Search Service"
              className="input input-bordered w-full"
            />
            <button type="submit" className="btn btn-square bg-gradient-to-tr from-[#54C2C3] to-[#00463E] w-24">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
              </svg>
            </button>
          </div>
        </form>
      </div>
      {/* all service cards */}
      {
                searchField.length > 0 ?
                <div className="grid grid-cols-1 gap-5 my-10">
                {seeAll ?
                    similarService?.map((card, index) => <SearchCard key={index} card={card}></SearchCard>)
                    :
                    similarService?.slice(0, 6)?.map((card, index) => <SearchCard key={index} card={card}></SearchCard>)

                }
                </div> 
                : 
                <div className="grid grid-cols-1 gap-5 my-10">
                {seeAll ?
                  services?.data?.map(service => <AllServicesCard key={service._id} service={service}></AllServicesCard>)
                  :
                  services?.data?.slice(0, 6)?.map(service => <AllServicesCard key={service._id} service={service}></AllServicesCard>)
                  
                }
            </div>
            }
      {/* --- */}
      {
        services?.data?.length > 6 &&
        
        <div className={seeAll && 'hidden'}>
      <button
      onClick={()=>setSeeAll(true)}
      className="normal-case block w-44 mb-10 select-none mx-auto rounded-lg bg-gradient-to-tr from-[#54C2C3] to-[#00463E] py-3 px-6 text-center align-middle font-rancho text-xl   text-white shadow-md shadow-[#54C2C3]/20 transition-all hover:shadow-lg hover:shadow-[#54C2C3]/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
         See More
      </button>
        </div>
      }
      
        
    </div>
    <Footer></Footer>
      </>
  );
};

export default Services;
