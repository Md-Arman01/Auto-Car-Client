import { FiPhoneCall } from 'react-icons/fi';

const Location = () => {
  return (
    <div>
      <div
        className="hero lg:h-[450px] my-10"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/2YKW2vZ/replicate-prediction-tkfhktrbc7xirtz6z4wxs7w6xy.png)",
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-32 py-10 lg:py-0 px-7 lg:px-0">
          <div>
            <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold">We Have Now <span className="text-orange-500">2000</span> Locations</h1>
            <p className="text-base text-gray-200  my-3 md:w-[650px]">
            locations is a brief statement indicating that a particular entity, organization, or system has expanded to encompass 2,000 distinct geographic points or places.
            </p>
            <div className='flex flex-col md:flex-row'>
                {/* 1 */}
            <div className="flex gap-7 mt-8 ml-20">
            <div>
                <FiPhoneCall className='text-white text-4xl'></FiPhoneCall>
            </div>
          <div>
            <p className="text-sm text-gray-200 mb-2">For Booking Ride</p>
            <h1 className="text-2xl font-semibold text-white">(580) 403 7961</h1>
            <p className="text-sm text-gray-200 mb-2 mt-2">We Are Available 24/7</p>
          </div>
        </div>
                {/* 2 */}
            <div className="flex gap-7 mt-8 ml-20">
            <div>
                <FiPhoneCall className='text-white text-4xl'></FiPhoneCall>
            </div>
          <div>
            <p className="text-sm text-gray-200 mb-2">Got Any Questions?</p>
            <h1 className="text-2xl font-semibold text-white">(431) 509 2091</h1>
            <p className="text-sm text-gray-200 mb-2 mt-2">We Are Available 24/7</p>
          </div>
        </div>

            </div>
          </div>
          <div className='flex gap-2 md:gap-10 items-end'>
            <div>
                <h1 className='text-2xl md:text-3xl lg:text-5xl text-orange-500'>1470</h1>
                <p className='text-gray-200 mt-3'>Rental Cars Fleet</p>
            </div>
            <div>
                <h1 className='text-2xl md:text-3xl lg:text-5xl text-orange-500'>265</h1>
                <p className='text-gray-200 mt-3'>5 Star Reviews</p>
            </div>
            <div>
                <h1 className='text-2xl md:text-3xl lg:text-5xl text-orange-500'>308</h1>
                <p className='text-gray-200 mt-3'>Rental Awards</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
