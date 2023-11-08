const HowWorks = () => {
  return (
    <div>
      <h1 className="text-center text-3xl md:text-4xl lg:text-6xl font-rancho">
        How It Works
      </h1>
      <hr className="w-28 mx-auto my-3 " />
     
     <div className="flex justify-between gap-5 container mx-auto my-10">
        {/* card 1 */}
      <div className="card  bg-base-100">
        <figure className="px-10 pt-10">
          <img
            src="https://i.ibb.co/XJjV8J4/Screenshot-101-removebg-preview.png"
            alt="Shoes"
            className="w-20 h-20"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="text-2xl font-semibold">Find Your Ride</h2>
          <p className="text-sm text-gray-500 font-medium">Find Your Ride is a mobile app or online service designed to help users discover and book transportation options, such as taxis, rideshares, public transit, or rental vehicles.</p>
          
        </div>
      </div>
      <img className="w-20 h-20 mt-10" src="https://i.ibb.co/RptDzCt/Screenshot-103-removebg-preview.png" alt="" />
        {/* card 2 */}
      <div className="card  bg-base-100 ">
        <figure className="px-10 pt-10">
          <img
            src="https://i.ibb.co/LSJ3Lpm/54058-removebg-preview.png"
            alt="Shoes"
            className="w-20 h-20"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="text-2xl font-semibold">Select & Book</h2>
          <p className="text-sm text-gray-500 font-medium">Select & Book is a concise and convenient way to describe a service or platform that allows users to choose and reserve something, such as accommodations, flights, tickets, or services.</p>
          
        </div>
      </div>
      <img className="w-20 h-20 mt-10" src="https://i.ibb.co/RptDzCt/Screenshot-103-removebg-preview.png" alt="" />
        {/* card 3 */}
      <div className="card  bg-base-100">
        <figure className="px-10 pt-10">
          <img
            src="https://i.ibb.co/NVwDpcZ/10846-removebg-preview.png"
            alt="Shoes"
            className="w-20 h-20"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="text-2xl font-semibold">Travel Together</h2>
          <p className="text-sm text-gray-500 font-medium">Travel Together is a brief and evocative phrase that describes a concept where individuals or groups journey to various destinations in each others company. It implies shared adventures.</p>
          
        </div>
      </div>

     </div>
      
    </div>
  );
};

export default HowWorks;
