import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import Navber from "../Navber/Navber";

const ErrorPage = () => {
  const navigate = useNavigate();
  const handleBack = ()=> {
    navigate('/')
  }

  return (
    <>
    <Navber></Navber>
    <div className="relative flex items-center justify-center h-screen">
      <button
        onClick={handleBack}
        className="absolute top-5 left-5 flex items-center gap-3 font-rancho font-semibold text-2xl text-[#374151]">
        <BiArrowBack className="text-xl"></BiArrowBack>Back to home
      </button>
      <img
        className="w-[1000px]"
        src="https://i.ibb.co/Sd4pPzZ/404-page-animation-example.gif"
        alt=""
      />
    </div>
    </>
  );
};

export default ErrorPage;