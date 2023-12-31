import { useNavigate } from "react-router-dom";
import banner from "../../assets/images/banner.png";
import { BsArrowRight } from 'react-icons/bs';
import Marquee from "react-fast-marquee";
import BannerMarquee from "../../Components/Marquee/BannerMarquee";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
    const navigate = useNavigate()
    const handleStart = ()=> {
        navigate('/services')
    }
  return (
    <div className="container mx-auto lg:mt-10 mb-5 lg:mb-0">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-5 lg:gap-0 px-7 lg:px-0 ">
        <div className="space-y-5">
          <h1 className="text-3xl md:text-4xl lg:text-6xl  md:w-[650px] font-rancho font-semibold dark:text-white">Scheduling automation platform to enhance your  
          
          <Typewriter
            words={[' online rides']}
            loop={100}
            cursor
            cursorStyle=''
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
          </h1>
          <p className="text-gray-500 font-semibold  md:w-[550px] dark:text-gray-400">Schedule is a simple appointment booking platform that facilitates online ride booking and helps you manage your  in moving a smart way.</p>
          <button
                  className="flex items-center gap-3 normal-case select-none rounded-lg bg-gradient-to-tr from-[#54C2C3] to-[#00463E] py-2 px-10 text-center align-middle font-rancho text-xl   text-white shadow-md shadow-[#54C2C3]/20 transition-all hover:shadow-lg hover:shadow-[#54C2C3]/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  onClick={handleStart}
                  data-ripple-light="true">
                  Start For Free <BsArrowRight></BsArrowRight>
          </button>
          <div className="w-[360px] md:w-[400px] pt-10">
            <Marquee className="flex gap-20" speed={50} direction="right">
                <BannerMarquee></BannerMarquee>
            </Marquee>
          </div>
        </div>
        <div>
          <img className="w-[800px]" src={banner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
