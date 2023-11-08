import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

const ServicesCard = ({service}) => {
    const {_id, services_img, services_name, services_description, provider_img, provider_name, price } = service || {}
  return (
    <div >

        
      <div className="relative flex flex-col md:flex-row md:h-[350px] rounded-xl bg-white dark:bg-slate-700 bg-clip-border text-gray-700 shadow-md hover:shadow-2xl hover:shadow-[#00463E]">
        <div className="relative m-0 p-3 md:p-0 md:w-2/4 shrink-0 overflow-hidden rounded-xl md:rounded-r-none bg-white bg-clip-border text-gray-700">
          <img src={services_img} alt="image" className="h-full w-full rounded-xl md:rounded-none object-cover" />
        </div>
        <div className="p-5 w-full">
        <div className="mb-1">
            <div className="flex items-center gap-5 mb-3">
            <img className=" w-14 h-14 rounded-full object-cover" src={provider_img} alt="" />
            <h1 className="text-gray-500 dark:text-gray-300">{provider_name}</h1>
            </div>
            <hr/>
          </div>
          <h4 className=" block font-rancho text-4xl bg-gradient-to-tr from-[#54C2C3] to-[#00463E] text-transparent bg-clip-text leading-snug tracking-normal text-blue-gray-900 antialiased">
            {services_name}
          </h4>
          <p className=" block text-sm font-normal leading-relaxed text-gray-500 dark:text-gray-300 antialiased h-32">
            {services_description?.slice(0, 99)}
          </p>
          
          <div className="flex items-center justify-between">
            <div>
            <p className="text-gray-500 dark:text-gray-300">For 1 Passenger</p>
            <p className="text-2xl font-semibold bg-gradient-to-tr from-[#54C2C3] to-[#00463E] text-transparent bg-clip-text">${price}</p>
            </div>

            <Link to={`/service/${_id}`}>
              <button
                className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-rancho text-2xl  bg-gradient-to-tr from-[#54C2C3] to-[#00463E] text-transparent bg-clip-text transition-all hover:bg-[#FF4804]/10 active:bg-[#FF4804]/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button">
                View Details
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-4 w-4 text-[#00463ee3]">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
};

ServicesCard.propTypes = {
    service: PropTypes.object.isRequired,
}

export default ServicesCard;
