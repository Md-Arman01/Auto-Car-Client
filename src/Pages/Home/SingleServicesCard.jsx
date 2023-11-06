import { useQuery } from "@tanstack/react-query";
import useAxios from "../../Hooks/useAxios";
import { useParams } from "react-router-dom";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import useAuth from "../../Hooks/useAuth";
import { RxCross1 } from "react-icons/rx";
import toast from "react-hot-toast";

const SingleServicesCard = () => {
  const { user } = useAuth();
  const axiosSecure = useAxios();
  const { id } = useParams();

  const { data: service } = useQuery({
    queryKey: ["service"],
    queryFn: async () => {
      return await axiosSecure.get(`/services/${id}`)},
  });

  const {
    provider_img,
    provider_name,
    provider_email,
    location,
    services_img,
    services_name,
    services_description,
    price,
  } = service?.data || {};

  const handleBookService = (e) => {
    const toastId = toast.loading("Booking Pendding...");

    e.preventDefault();
    const form = e.target;
    const date = form.date.value;
    const instruction = form.instruction.value;
    const booked = {
      services_img,
      services_name,
      provider_email,
      provider_img,
      provider_name,
      user_email: user?.email,
      instruction,
      price,
      date,
    };
    axiosSecure.post("/booking", booked).then((res) => {
      if (res?.data?.insertedId) {
        toast.success("Booking Successfully!", { id: toastId });
      }
      console.log(res.data);
    });

    form.reset();
  };

  return (
    <>
      <div className="container mx-auto my-10">
        <div>
          <h1 className="text-5xl font-rancho font-semibold underline underline-offset-8 mb-12">
            Service{" "}
            <span className="bg-gradient-to-tr from-[#54C2C3] to-[#00463E] text-transparent bg-clip-text">
              Provider
            </span>
          </h1>
        </div>
        <div className="flex gap-8">
          {/* provider */}
          <div>
            <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
              <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg h-80 rounded-xl bg-clip-border">
                <img
                  src={provider_img}
                  className="h-full w-full object-cover"
                  alt="profile-picture"
                />
              </div>
              <div className="p-8 text-center">
                <h4 className="block mb-2 font-rancho text-4xl antialiased  leading-snug tracking-normal bg-gradient-to-tr from-[#54C2C3] to-[#00463E] text-transparent bg-clip-text">
                  {provider_name}
                </h4>
                <p className="block text-gray-500 text-base antialiased font-medium leading-relaxed">
                  {location}
                </p>
                <div className="flex justify-center pt-2 gap-7">
                  <BsFacebook className="text-xl text-[#369CF0]"></BsFacebook>
                  <BsTwitter className="text-xl text-[#1AABF0]"></BsTwitter>
                  <BsInstagram className="text-xl text-[#9D36B4]"></BsInstagram>
                </div>
              </div>
            </div>
          </div>
          {/* service card */}
          <div>
            <div className="container mx-auto px-4 lg:px-0">
              <div className="lg:flex gap-5 rounded-lg bg-base-100 shadow-xl px-4 lg:px-0">
                <img
                  className="lg:w-[700px] lg:h-[600px] my-5 lg:my-0 mx-auto object-cover rounded-xl md:rounded-lg"
                  src={services_img}
                  alt=""
                />
                <div className="flex items-center justify-center">
                  <div className="space-y-2 md:space-y-5 px-1 lg:px-5 mt-2 lg:mt-0 mb-6 lg:mb-0">
                    <div className="mb-1">
                      <div className="flex items-center justify-center gap-5 mb-4">
                        <img
                          className=" w-14 h-14 rounded-full object-cover"
                          src={provider_img}
                          alt=""
                        />
                        <h1 className="text-2xl font-semibold">
                          {provider_name}
                        </h1>
                      </div>
                      <hr />
                    </div>
                    <h2 className="text-2xl md:text-4xl lg:text-6xl  font-rancho font-medium bg-gradient-to-tr from-[#54C2C3] to-[#00463E] text-transparent bg-clip-text">
                      {services_name}
                    </h2>
                    <p className="text-base text-gray-500">
                      {services_description}
                    </p>
                    <div>
                      <p className="text-gray-500">For 1 Passenger</p>
                      <p className="text-2xl font-semibold bg-gradient-to-tr from-[#54C2C3] to-[#00463E] text-transparent bg-clip-text">
                        ${price}
                      </p>
                    </div>
                    {/* modal and booking input field*/}

                    <button
                      className="normal-case block w-full select-none rounded-lg bg-gradient-to-tr from-[#54C2C3] to-[#00463E] py-3 px-6 text-center align-middle font-rancho text-xl   text-white shadow-md shadow-[#54C2C3]/20 transition-all hover:shadow-lg hover:shadow-[#54C2C3]/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      onClick={() =>
                        document.getElementById("my_modal_5").showModal()
                      }>
                      Book Now
                    </button>
                    <dialog id="my_modal_5" className="modal modal-bottom">
                      <div className="modal-box mx-auto my-auto rounded-xl bg-[#e0feff] lg:w-[700px]">
                        <div className="container mx-auto my-10 lg:my-16 px-5 lg:px-0">
                          <div>
                            <div>
                              <h1 className="bg-gradient-to-tr from-[#54C2C3] to-[#00463E] text-transparent bg-clip-text text-3xl md:text-4xl lg:text-5xl text-center font-rancho font-semibold mb-3">
                                Book Service
                              </h1>
                            </div>

                            <form onSubmit={handleBookService}>
                              <h1 className="md:text-lg font-medium mb-2">
                                Services Image
                              </h1>
                              <input
                                placeholder={services_img}
                                className="input input-bordered w-full"
                                disabled
                              />
                              <div className="grid grid-cols-2 gap-5 my-5">
                                <div>
                                  <h1 className="md:text-lg font-medium mb-2">
                                    Services Name
                                  </h1>
                                  <input
                                    placeholder={services_name}
                                    className="input input-bordered w-full"
                                    disabled
                                  />
                                </div>
                                <div>
                                  <h1 className="md:text-lg font-medium mb-2">
                                    Provider Email
                                  </h1>
                                  <input
                                    placeholder={provider_email}
                                    className="input input-bordered w-full"
                                    disabled
                                  />
                                </div>
                                <div>
                                  <h1 className="md:text-lg font-medium mb-2">
                                    User Email
                                  </h1>
                                  <input
                                    placeholder={user?.email}
                                    className="input input-bordered w-full"
                                    disabled
                                  />
                                </div>
                                <div>
                                  <h1 className="md:text-lg font-medium mb-2">
                                    Service Price
                                  </h1>
                                  <input
                                    placeholder={price}
                                    className="input input-bordered w-full"
                                    disabled
                                  />
                                </div>
                                <div>
                                  <h1 className="md:text-lg font-medium mb-2">
                                    Taking Date
                                  </h1>
                                  <input
                                    type="date"
                                    name="date"
                                    required
                                    className="input input-bordered w-full"
                                  />
                                </div>
                                <div>
                                  <h1 className="md:text-lg font-medium mb-2">
                                    Instruction
                                  </h1>
                                  <input
                                    type="text"
                                    name="instruction"
                                    required
                                    placeholder="Enter Instruction"
                                    className="input input-bordered w-full"
                                  />
                                </div>
                              </div>

                              <input
                                className="w-full mt-7 bg-gradient-to-tr from-[#54C2C3] to-[#00463E] text-white font-rancho mx-auto normal-case block select-none rounded-lg  py-3 px-6 text-center align-middle  text-2xl shadow-md shadow-[#00463E]/20 transition-all hover:shadow-lg hover:cursor-pointer hover:shadow-[#54C2C3]/40 active:opacity-[0.85] hover:translate-y-1 hover:transition-transform disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="submit"
                                value="Purchase This Service"
                              />
                            </form>
                          </div>
                        </div>

                        <form
                          className="absolute right-5 top-5"
                          method="dialog">
                          <button className="btn rounded-full bg-red-400 hover:bg-red-300">
                            <RxCross1 className="text-base"></RxCross1>
                          </button>
                        </form>
                      </div>
                    </dialog>

                    {/* ------- */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleServicesCard;
