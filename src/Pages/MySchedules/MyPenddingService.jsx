import PropTypes from 'prop-types'
import useAxios from '../../Hooks/useAxios';

const MyPenddingService = ({ penddingService, penddingServices , setPenddingServices}) => {
  const {_id, services_img, services_name, date } = penddingService || {}
  const { status } = penddingService || {}
  console.log(status)
  const axiosSecure = useAxios()
  
  const handleProgress = (id)=> {
    const progress = { status: 'in progress'}
    axiosSecure.patch(`/booking/${id}`, progress, )
    .then(res => {
      if(res?.data?.modifiedCount > 0){
        const remainnig = penddingServices?.filter(penddingService => penddingService?._id !== id)
        const updated = penddingServices?.find(penddingService => penddingService?._id === id)
        updated.status = 'in progress'
        const newPendding = [updated, ...remainnig]
        setPenddingServices(newPendding)
      }
    })
  }

  const handleCompleted = (id)=> {
    const progress = { status: 'completed'}
    axiosSecure.patch(`/booking/${id}`, progress, )
    .then(res => {
      if(res?.data?.modifiedCount > 0){
        const remainnig = penddingServices?.filter(penddingService => penddingService?._id !== id)
        const updated = penddingServices?.find(penddingService => penddingService?._id === id)
        updated.status = 'completed'
        const newPendding = [updated, ...remainnig]
        setPenddingServices(newPendding)
      }
    })
  }



  return (
    <div>
      <hr className='mb-3' />
    <div className="flex items-center justify-between">
      <div className=" flex-1">
        <img
          className="w-40 h-32 rounded-lg"
          src={services_img}
          alt=""
          />
        <h1 className='text-xl font-semibold my-2'>{services_name}</h1>
      </div>
      <div  className=" flex-1 text-center">
        <h1 className="text-lg font-medium text-gray-500">{date}</h1>
      </div>
      <div className="flex  flex-1 justify-end">
        <div className="dropdown dropdown-end">
        {
              status  === `${status}` ?
              <button className="normal-case block w-full select-none rounded-lg bg-gradient-to-tr from-[#36D399] to-[#36D399] py-1 px-6 text-center align-middle font-rancho text-xl   text-white shadow-md shadow-[#36D399]/20 transition-all hover:shadow-lg hover:shadow-[#36D399]/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">{status}</button>
              :
              <label tabIndex={0}>
                <button
                  className="normal-case block w-full select-none rounded-lg bg-gradient-to-tr from-[#54C2C3] to-[#00463E] py-1 px-6 text-center align-middle font-rancho text-xl   text-white shadow-md shadow-[#54C2C3]/20 transition-all hover:shadow-lg hover:shadow-[#54C2C3]/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  >
                  Pedding
                </button>
              </label>
              

              
        }
          
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            <li onClick={()=> handleProgress(_id)}>
              <a>In Progress</a>
            </li>
            <li onClick={()=> handleCompleted(_id)}>
              <a>Completed</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
</div>
  );
};

MyPenddingService.propTypes = {
    penddingService: PropTypes.object.isRequired,
    penddingServices: PropTypes.array.isRequired,
    setPenddingServices: PropTypes.array.isRequired,
}
export default MyPenddingService;
