import PropTypes from 'prop-types'
import { Link} from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxios from '../../Hooks/useAxios';
import toast from 'react-hot-toast';


const MyServicesCard = ({service, services, setServices}) => {
    const {_id, services_img, services_name, services_description, provider_img, provider_name, price } = service || {}
    const axiosSecure = useAxios()


    const handleDelete = (id) =>{
        
        Swal.fire({
            title: 'Are you sure?',
            text: "You delete this service!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                const toastId = toast.loading('Deleting Service...')
              axiosSecure.delete(`/services/${id}`)
              .then(res => {
                if(res?.data?.deletedCount > 0){
                    toast.success("Deleted Service!", { id: toastId }) 
                    const remainingCard  = services.filter(service => service._id !== id) 
                    setServices(remainingCard)
                  }
              })
            }
          })
    }

    return (
        <div>

            <div className="relative flex flex-col md:flex-row  rounded-xl bg-white bg-clip-border text-gray-700 shadow-md hover:shadow-2xl hover:shadow-[#00463E]">
        <div className="relative m-0 p-3 md:p-0 md:w-2/4 shrink-0 overflow-hidden rounded-xl md:rounded-r-none bg-white bg-clip-border text-gray-700">
          <img src={services_img} alt="image" className="h-full w-full rounded-xl md:rounded-none object-cover" />
        </div>
        <div className="p-5 w-full">
        <div className="mb-1">
            <div className="flex items-center gap-5 mb-3">
            <img className=" w-14 h-14 rounded-full object-cover" src={provider_img} alt="" />
            <h1 className="text-gray-500">{provider_name}</h1>
            </div>
            <hr/>
          </div>
          <h4 className=" block font-rancho text-4xl bg-gradient-to-tr from-[#54C2C3] to-[#00463E] text-transparent bg-clip-text leading-snug tracking-normal text-blue-gray-900 antialiased">
            {services_name}
          </h4>
          <p className=" block text-sm font-normal leading-relaxed text-gray-500 antialiased h-32">
            {services_description?.slice(0, 99)}
          </p>
          
            <div>
            <p className="text-gray-500">For 1 Passenger</p>
            <p className="text-2xl font-semibold bg-gradient-to-tr from-[#54C2C3] to-[#00463E] text-transparent bg-clip-text">${price}</p>
            </div>
                <div className="flex justify-between items-center gap-5 mt-2">
                <Link to={`/update/${_id}`}
                    className="normal-case block w-full select-none rounded-lg bg-gradient-to-tr from-[#54C2C3] to-[#00463E] py-3 px-6 text-center align-middle font-rancho text-xl   text-white shadow-md shadow-[#54C2C3]/20 transition-all hover:shadow-lg hover:shadow-[#54C2C3]/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"

                >
                <button
                >
                  Edit
                </button>
                </Link>
                <button
                  onClick={()=>handleDelete(_id)}
                  className="normal-case block w-full select-none rounded-lg bg-gradient-to-tr from-[#54C2C3] to-[#00463E] py-3 px-6 text-center align-middle font-rancho text-xl   text-white shadow-md shadow-[#54C2C3]/20 transition-all hover:shadow-lg hover:shadow-[#54C2C3]/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  >
                  Delete
                </button>
          </div>
        </div>
      </div>
        </div>
    );
};

MyServicesCard.propTypes = {
    service: PropTypes.object.isRequired,
    services: PropTypes.array.isRequired,
    setServices: PropTypes.array.isRequired,

}
export default MyServicesCard;