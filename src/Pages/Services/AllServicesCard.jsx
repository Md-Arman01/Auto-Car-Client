import PropTypes from "prop-types";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";

const AllServicesCard = ({ service }) => {
  const {
    _id,
    services_img,
    services_name,
    services_description,
    provider_img,
    provider_name,
    price,
    location,
  } = service || {};

  return (
    <div className="lg:h-[311px] shadow-md  rounded-xl bg-clip-border hover:shadow-2xl hover:shadow-[#00463E] px-5 md:px-7 py-5 md:py-7">
      <div className="flex flex-col lg:flex-row gap-10">
        <div>
          <div className="lg:w-[350px] lg:h-[250px]">
            <img
              className="w-full h-full object-cover rounded-xl"
              src={services_img}
              alt=""
            />
          </div>
        </div>
        <div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl mb-4 font-rancho font-medium bg-gradient-to-tr from-[#54C2C3] to-[#00463E] text-transparent bg-clip-text">
            {services_name}
          </h1>
          <h1 className="text-sm leading-6 text-gray-500 lg:w-[800px] h-32">
            {services_description?.slice(0, 99)}
          </h1>
          {/*  */}
          <div className="flex items-center justify-between lg:gap-10">
            <div>
              <p className="text-base md:text-xl font-semibold text-gray-600">For 1 Passenger</p>
              <p className="text-2xl font-semibold bg-gradient-to-tr from-[#54C2C3] to-[#00463E] text-transparent bg-clip-text">
                ${price}
              </p>
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
          {/*  */}
        </div>
        <div>
          <div className="relative mt-4 overflow-hidden text-gray-700 bg-white shadow-lg h-32 w-32 rounded-full bg-clip-border mx-auto">
            <img
              src={provider_img}
              className="h-32 w-32 object-cover rounded-full"
              alt="profile-picture"
            />
          </div>
          <div className=" text-center">
            <h4 className="block  font-rancho text-4xl antialiased  leading-snug tracking-normal bg-gradient-to-tr from-[#54C2C3] to-[#00463E] text-transparent bg-clip-text">
              {provider_name?.slice(0, 10)}
            </h4>
            <p className="block text-gray-500 text-base antialiased font-medium leading-relaxed">
              {location}
            </p>
            <div className="flex justify-center pt-2 gap-7">
              <BsFacebook className="text-xl text-[#369CF0] hover:cursor-pointer"></BsFacebook>
              <BsTwitter className="text-xl text-[#1AABF0] hover:cursor-pointer"></BsTwitter>
              <BsInstagram className="text-xl text-[#9D36B4] hover:cursor-pointer"></BsInstagram>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
AllServicesCard.propTypes = {
  service: PropTypes.object.isRequired,
};
export default AllServicesCard;
