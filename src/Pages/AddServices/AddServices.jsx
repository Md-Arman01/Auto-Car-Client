import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";
import useAxios from "../../Hooks/useAxios";
import { Helmet } from "react-helmet-async";

const AddServices = () => {
    const {user} = useAuth()
    const axiosSecure = useAxios()

    const handleAddService = (e)=> {
        const toastId = toast.loading('Adding Service...')


        e.preventDefault()
        const form = e.target;
        const servicePhotoURL = form.servicePhotoURL.value
        const serviceName = form.serviceName.value
        const price = form.price.value
        const location = form.location.value
        const description = form.description.value

        const service = {
               services_img: servicePhotoURL,               
               services_name: serviceName,               
               services_description: description,               
               provider_img: user?.photoURL,               
               provider_name: user?.displayName,               
               location: location,               
               price: price,               
               provider_email: user?.email
        }
        axiosSecure.post('/services', service)
        .then(res => {
            if(res?.data?.insertedId){
                form.reset()
                toast.success('Service Added!', { id: toastId })

            }
        })
        
    }



    return (
        <div className="container mx-auto my-10 lg:my-16 px-5 lg:px-0">
          <Helmet>
            <title>Auto Car | Add Services</title>
          </Helmet>
      <div className="card flex-1 mb-7 bg-[#e0feff] border shadow-md p-5 md:p-12 rounded-md overflow-x-hidden">
        <div>
          <h1 className="bg-gradient-to-tr from-[#54C2C3] to-[#00463E] text-transparent bg-clip-text text-3xl md:text-4xl lg:text-5xl text-center font-rancho font-semibold mb-3">
            Add Service
          </h1>
          <p className="text-center mx-auto  lg:w-[900px] text-[#969494] mb-2 lg:mb-2">
            However, I will need more information about the specific Service you
            have in mind. Please provide details about the Service, its
            category, and any unique features or benefits you did like to
            emphasize.
          </p>
        </div>

        <form onSubmit={handleAddService}>
          <h1 className="md:text-lg font-medium mb-2">Service PhotoURL</h1>
          <input
            type="text"
            name="servicePhotoURL"
            required
            placeholder="Enter Service PhotoURL"
            className="input input-bordered w-full"
          />
          <div className="grid grid-cols-2 gap-5 my-5">
            <div>
              <h1 className="md:text-lg font-medium mb-2">Service Name</h1>
              <input
                type="text"
                name="serviceName"
                required
                placeholder="Enter Service Name"
                className="input input-bordered w-full"
              />
            </div>
            <div>
            <h1 className="md:text-lg font-medium mb-2">Price</h1>
              <input
                type="text"
                name="price"
                required
                placeholder="Enter Service Price"
                className="input input-bordered w-full"
              />
            </div>
            <div>
            <h1 className="md:text-lg font-medium mb-2">Location</h1>
              <input
                type="text"
                name="location"
                required
                placeholder="Enter Location"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <h1 className="md:text-lg font-medium mb-2">Description</h1>
              <input
                type="text"
                name="description"
                required
                placeholder="Enter Service Short Description"
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <input
            className="w-full mt-7 bg-gradient-to-tr from-[#54C2C3] to-[#00463E] text-transparent text-white font-rancho mx-auto normal-case block select-none rounded-lg  py-3 px-6 text-center align-middle  text-2xl shadow-md shadow-[#00463E]/20 transition-all hover:shadow-lg hover:cursor-pointer hover:shadow-[#00463E]/40 active:opacity-[0.85] hover:translate-y-1 hover:transition-transform disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="submit"
            value="Add Service"
            
            />
        </form>
      </div>
    </div>
    );
};

export default AddServices;