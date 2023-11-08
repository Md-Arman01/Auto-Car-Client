import toast from "react-hot-toast";
import useAxios from "../../Hooks/useAxios";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";

const UpdateServicesCard = () => {
    const navigate = useNavigate()
     const axiosSecure = useAxios()
    const {id} = useParams()

    const { data: service } = useQuery({
        queryKey: ["service"],
        queryFn: async() =>{
        return await  axiosSecure.get(`/services/${id}`)
          
        } 
      });
      const {
          services_img,
          services_name,
          price,
          location,
          services_description,
      } = service?.data || {};


    const handleUpdateService = (e)=> {
        const toastId = toast.loading('Updating Service...')


        e.preventDefault()
        const form = e.target;
        const servicePhotoURL = form.servicePhotoURL.value
        const serviceName = form.serviceName.value
        const price = form.price.value
        const location = form.location.value
        const description = form.description.value

        const updateService = {
               services_img: servicePhotoURL,               
               services_name: serviceName,               
               services_description: description,               
               location: location,               
               price: price,
        }
        
        axiosSecure.put(`/services/${id}`, updateService)
        .then(res => {
            if(res?.data?.modifiedCount > 0){
                navigate(-1)
                form.reset()
                toast.success("Updated Service!", { id: toastId });
            }
        })    
        
        
        
        
    }


    return (
        <div>
          <Helmet>
            <title>Auto Car | Update</title>
          </Helmet>
            <div className="container mx-auto my-7 lg:my-16 px-5 lg:px-0">
          <div className="card flex-1 mb-7 bg-[#e0feff] border shadow-md p-5 md:p-12 rounded-md overflow-x-clip">
            <div>
              <h1 className="text-[#3D506E] text-3xl lg:text-4xl text-center font-rancho font-semibold mb-3 bg-gradient-to-tr from-[#54C2C3] to-[#00463E] text-transparent bg-clip-text">
                Update Service
              </h1>
              <p className="text-center mx-auto lg:w-[900px] text-[#969494] mb-3 lg:mb-0">
              A Service update is a modification or enhancement made to an existing Service, often with the goal of improving its features, performance, or user experience.
              </p>
            </div>
    
            <form onSubmit={handleUpdateService}>
          <h1 className="md:text-lg font-medium mb-2">Service PhotoURL</h1>
          <input
            type="text"
            name="servicePhotoURL"
            defaultValue={services_img}
            placeholder="Enter Service PhotoURL"
            className="input input-bordered w-full"
          />
          <div className="grid grid-cols-2 gap-5 my-5">
            <div>
              <h1 className="md:text-lg font-medium mb-2">Service Name</h1>
              <input
                type="text"
                name="serviceName"
                defaultValue={services_name}
                placeholder="Enter Service Name"
                className="input input-bordered w-full"
              />
            </div>
            <div>
            <h1 className="md:text-lg font-medium mb-2">Price</h1>
              <input
                type="text"
                name="price"
                defaultValue={price}
                placeholder="Enter Service Price"
                className="input input-bordered w-full"
              />
            </div>
            <div>
            <h1 className="md:text-lg font-medium mb-2">Location</h1>
              <input
                type="text"
                name="location"
                defaultValue={location}
                placeholder="Enter Location"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <h1 className="md:text-lg font-medium mb-2">Description</h1>
              <input
                type="text"
                name="description"
                defaultValue={services_description}
                placeholder="Enter Service Short Description"
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <input
            className="w-full mt-7 bg-gradient-to-tr from-[#54C2C3] to-[#00463E] text-transparent text-white font-rancho mx-auto normal-case block select-none rounded-lg  py-3 px-6 text-center align-middle  text-2xl shadow-md shadow-[#00463E]/20 transition-all hover:shadow-lg hover:cursor-pointer hover:shadow-[#00463E]/40 active:opacity-[0.85] hover:translate-y-1 hover:transition-transform disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="submit"
            value="Update Service"
            
            />
        </form>
          </div>
        </div>
        </div>
    );
};

export default UpdateServicesCard;