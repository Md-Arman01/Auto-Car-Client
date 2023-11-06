
import { RxCross1 } from "react-icons/rx";
import PropTypes from 'prop-types'

const BookingCard = ({booking}) => {
    const {services_img, services_name, date, instruction, provider_img, provider_name, price } = booking || {}

  return (
    <div>
      <div className="relative flex flex-col md:flex-row  rounded-xl bg-white bg-clip-border text-gray-700 shadow-md hover:shadow-2xl hover:shadow-[#00463E]">
        <div className="relative m-0 p-3 md:p-0 md:w-2/4 shrink-0 overflow-hidden rounded-xl md:rounded-r-none bg-white bg-clip-border text-gray-700">
          <img
            src={services_img}
            alt="image"
            className="h-full w-full rounded-xl md:rounded-none object-cover"
          />
        </div>
        <div className="p-5 w-full">
          <div className="mb-1">
            <div className="flex items-center gap-5 mb-3">
              <img
                className=" w-14 h-14 rounded-full object-cover"
                src={provider_img}
                alt=""
              />
              <h1 className="text-gray-500">{provider_name}</h1>
            </div>
            <hr />
          </div>
          <h4 className=" block font-rancho text-4xl bg-gradient-to-tr from-[#54C2C3] to-[#00463E] text-transparent bg-clip-text leading-snug tracking-normal text-blue-gray-900 antialiased">
            {services_name}
          </h4>
          <p className=" block text-sm font-normal leading-relaxed text-gray-500 antialiased h-32">
            {instruction}
          </p>

          <div className="flex items-center justify-between ">
            <div>
              <p className="text-gray-500">For 1 Passenger</p>
              <p className="text-2xl font-semibold bg-gradient-to-tr from-[#54C2C3] to-[#00463E] text-transparent bg-clip-text">
                ${price}
              </p>
            </div>

            <div>
              <p className="text-gray-500">Taking Date</p>
              <p className="text-2xl font-semibold bg-gradient-to-tr from-[#54C2C3] to-[#00463E] text-transparent bg-clip-text">
                {date}
              </p>
            </div>

          </div>
        </div>
          <div className="absolute -top-5 -right-5">
                <button className="btn rounded-full bg-red-400 hover:bg-red-300">
                        <RxCross1 className="text-base"></RxCross1>
                </button>
          </div>
      </div>
    </div>
  );
};

BookingCard.propTypes ={
    booking: PropTypes.object.isRequired,
}
export default BookingCard;
