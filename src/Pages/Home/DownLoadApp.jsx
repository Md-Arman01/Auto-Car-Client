import { IoLogoGooglePlaystore } from 'react-icons/io5';
import { BsApple } from 'react-icons/bs';

const DownLoadApp = () => {
    return (
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center my-5 lg:my-20">
            <img className=" md:w-[400px] rounded-2xl" src="https://i.ibb.co/W6c492N/side-view-hands-holding-smartphone-500.webp" alt="" />
            <div className="bg-[#FF9B23] md:h-[380px] md:w-[800px] p-20">
                <h1 className="text-2xl md:text-4xl lg:text-5xl mb-5 text-white font-semibold">Download Our App</h1>
                <p className="text-white text-xl">Are you driving today and have a free seat to offer in your car or you traveling and need a lift to destination,</p>
                <p className="text-xl md:text-2xl lg:text-3xl text-white font-semibold">Let's Auto Car.</p>
                
                <div className='flex gap-5 mt-5'>
                
              <button
                className="btn btn-outline normal-case border-white text-white">
                <IoLogoGooglePlaystore className="text-xl text-white"></IoLogoGooglePlaystore>Google Play
              </button>
              <button
                className="btn btn-outline normal-case border-white text-white">
                <BsApple className="text-xl text-white"></BsApple>Apple Store
              </button>
                </div>
            </div>
        </div>
    );
};

export default DownLoadApp;