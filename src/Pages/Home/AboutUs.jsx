

const AboutUs = () => {
  return (
    <div className="container mx-auto  flex flex-col-reverse lg:flex-row items-center justify-between px-7 lg:px-0">

    <div>
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold">About Auto Car</h1>
        <hr className="w-28 mt-2 " />
      
        {/* 1 */}
        <div className="flex gap-5 mt-5 md:mt-8 ml-10 md:ml-20">
        <img
            src="https://i.ibb.co/LSJ3Lpm/54058-removebg-preview.png"
            alt="Shoes"
            className="w-14 md:w-24 h-14 md:h-24 rounded-full border border-dashed border-black p-2"
          />
          <div>
            <h1 className="text-xl font-medium ">Millions Of Journeys</h1>
            <p className="text-sm text-gray-500 md:w-[350px] mt-2">Millions Of Journeys is a concise and poetic phrase that evokes the idea of countless adventures and travels taking place around the world...</p>
          </div>
        </div>
        {/* 2 */} 
        <div className="flex gap-5 mt-5 md:mt-8 ml-10 md:ml-20">
        <img
            src="https://i.ibb.co/ZMmWtwN/Screenshot-105-removebg-preview.png"
            alt="Shoes"
            className="w-14 md:w-24 h-14 md:h-24 rounded-full border border-dashed border-black p-2"
          />
          <div>
            <h1 className="text-xl font-medium ">Largest Car Rider Service</h1>
            <p className="text-sm text-gray-500 md:w-[350px] mt-2">Largest Car Rider Service is a succinct and descriptive phrase that conveys the idea of a car transportation service that boasts the highest number...</p>
          </div>
        </div>
        {/* 3 */}
        <div className="flex gap-5 mt-5 md:mt-8 ml-10 md:ml-20">
        <img
            src="https://i.ibb.co/dpd8Bm4/Screenshot-106-removebg-preview.png"
            alt="Shoes"
            className="w-14 md:w-24 h-14 md:h-24 rounded-full border border-dashed border-black p-2"
          />
          <div>
            <h1 className="text-xl font-medium ">Simple & Smart Riding</h1>
            <p className="text-sm text-gray-500 md:w-[350px] mt-2">Simple & Smart Riding is a concise and appealing phrase that encapsulates the concept of uncomplicated and intelligent transportation solutions...</p>
          </div>
        </div>
      
    </div>
      {/* image */}
      <div>
      
      <img className="w-[900px]" src="https://i.ibb.co/9rtxtSC/Screenshot-107.png" alt="" />
      </div>
    </div>
  );
};

export default AboutUs;
