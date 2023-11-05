import { useNavigate } from "react-router-dom";
import banner from "../../assets/images/banner.png";
import { BsArrowRight } from 'react-icons/bs';
import Marquee from "react-fast-marquee";
import BannerMarquee from "../../Components/Marquee/BannerMarquee";

const Banner = () => {
    const navigate = useNavigate()
    const handleStart = ()=> {
        navigate('/services')
    }
  return (
    <div className="container mx-auto my-10">
      <div className="flex items-center justify-between">
        <div className="space-y-5">
          <h1 className="text-2xl md:text-4xl lg:text-6xl w-[650px] font-rancho font-semibold">Scheduling automation platform to enhance your online rides</h1>
          <p className="text-gray-500 font-semibold w-[550px]">Schedule is a simple appointment booking platform that facilitates online ride booking and helps you manage your  in moving a smart way.</p>
          <button
                  className="flex items-center gap-3 normal-case select-none rounded-lg bg-gradient-to-tr from-[#54C2C3] to-[#00463E] py-2 px-10 text-center align-middle font-rancho text-xl   text-white shadow-md shadow-[#54C2C3]/20 transition-all hover:shadow-lg hover:shadow-[#54C2C3]/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  onClick={handleStart}
                  data-ripple-light="true">
                  Start For Free <BsArrowRight></BsArrowRight>
          </button>
          <div className="w-[400px] pt-10">
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
