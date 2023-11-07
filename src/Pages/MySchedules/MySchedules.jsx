import { useEffect } from "react";
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";
import BookingCard from "./BookingCard";
import MyPenddingService from "./MyPenddingService";
import { ImCancelCircle } from 'react-icons/im';
import { Helmet } from "react-helmet-async";

const MySchedules = () => {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);
  const [penddingServices, setPenddingServices] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/booking/${user?.email}`, {credentials: 'include'})
      .then((res) => res.json())
      .then((res) => setBookings(res));
  }, [user?.email]);

  useEffect(() => {
    fetch(`http://localhost:5000/booking1/${user?.email}`, {credentials: 'include'})
      .then((res) => res.json())
      .then((res) => setPenddingServices(res));
  }, [user?.email]);

  return (
    <div className="container mx-auto">
      <Helmet>
        <title>Auto Car | My Schedules</title>
      </Helmet>
      {/* my booking services */}
      
      {
        bookings.length > 0 ?
        <div>
          <div className="flex justify-center mt-10">
        <h1 className="text-5xl bg-gradient-to-tr from-[#54C2C3] to-[#00463E] text-transparent bg-clip-text font-rancho font-semibold mb-12">
          My Booking Services: {bookings.length}
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {bookings?.map((booking) => (
          <BookingCard
          key={booking?._id}
          booking={booking}
          bookings={bookings}
          setBookings={setBookings}></BookingCard>
          ))}
      </div>
        </div>
      :
      <div className="flex flex-col items-center justify-center my-64 gap-5">
              <h1 className="font-rancho text-3xl md:text-4xl lg:text-6xl bg-gradient-to-tr from-[#54C2C3] to-[#00463E] text-transparent bg-clip-text">Booking Service Not Found</h1>
              <ImCancelCircle className="text-3xl md:text-4xl lg:text-5xl text-[#54C2C3]"></ImCancelCircle>
      </div>


      }
      {/* --------------- */}
      <div className="flex justify-center gap-10 my-32">
        <p className="border w-20 md:w-[150px] lg:w-[250px]"></p>
        <p className="border w-20 md:w-[150px] lg:w-[250px]"></p>

      </div>
      {/* my pendding services */}
      {
        penddingServices.length > 0 ?
      <div>
        <h1 className="text-5xl text-center bg-gradient-to-tr from-[#54C2C3] to-[#00463E] text-transparent bg-clip-text font-rancho font-semibold mb-12">
          My Pendding Services: {penddingServices.length}
        </h1>
        <div>
          <div>
            <div className="flex justify-between mb-5">
              <h1 className="text-xl font-semibold">Services</h1>
              <h1 className="text-xl font-semibold">Taking Date</h1>
              <h1 className="text-xl font-semibold">Booking</h1>
            </div>
            <div className="grid ">
              {penddingServices?.map((penddingService) => (
                <MyPenddingService
                  key={penddingService?._id}
                  penddingService={penddingService}
                  penddingServices= {penddingServices}
                  setPenddingServices={setPenddingServices}
                  ></MyPenddingService>
              ))}
            </div>
          </div>
        </div>
      </div>
      :
      <div className="flex flex-col items-center justify-center my-64 gap-5">
              <h1 className="font-rancho text-3xl md:text-4xl lg:text-6xl bg-gradient-to-tr from-[#54C2C3] to-[#00463E] text-transparent bg-clip-text">Pendding Service Not Found</h1>
              <ImCancelCircle className="text-3xl md:text-4xl lg:text-5xl text-[#54C2C3]"></ImCancelCircle>
      </div>
        
      }
      {/* -------- */}
    </div>
  );
};

export default MySchedules;
