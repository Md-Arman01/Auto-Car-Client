import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const ProviderOtherServiceCard = ({ item }) => {
  const { _id, services_img, services_name, services_description, price } =
    item || {};
    const navigate = useNavigate()
    const handleCardDetails = ()=>{
        navigate(`/service/${_id}`)
        window.location.reload()
    }

  return (
    <div onClick={handleCardDetails}>
      
        <div className="card bg-base-100 shadow-xl hover:shadow-2xl hover:shadow-[#00463E] pt-4 ">
          <figure>
            <img className="rounded-xl h-52" src={services_img} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="text-3xl font-rancho bg-gradient-to-tr from-[#54C2C3] to-[#00463E] text-transparent bg-clip-text">
              {services_name}
            </h2>
            <p className="text-sm text-gray-400 mb-5 h-12">
              {services_description?.slice(0, 80)}
            </p>
            <div className="card-actions items-center justify-end">
              <p className="text-base font-medium">For 1 Passenger</p>
              <h1 className="text-2xl font-semibold bg-gradient-to-tr from-[#54C2C3] to-[#00463E] text-transparent bg-clip-text">
                ${price}
              </h1>
            </div>
          </div>
        </div>
     
    </div>
  );
};
ProviderOtherServiceCard.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ProviderOtherServiceCard;
