import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";

const Register = () => {
  const  {createUser} = useAuth()

  const handleRegister = (e) => {
    e.preventDefault();

   const toastId = toast.loading('Registering...!')


    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const checked = e.target.checkbox.checked;

    if (password.length < 6) {
      toast.error('Please give me minimum 6 characters' , {id: toastId})
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast.error('Please give me minimum one capital letter' , {id: toastId})
      return;
    } else if (!/[!@#$%^&*()_+~`\-={}[\]:;"'<>,.?/\\|]/.test(password)) {
      toast.error('Please give me minimum one special character' , {id: toastId})
      return;
    } else if (!checked) {
      toast.error('Please accept our Terms and Condition' , {id: toastId})
      return;
    }

    createUser(email, password)
      .then((result) => {
        toast.success('Register Successfully!', { id: toastId })
        console.log(result.user)
        
      })
      .catch((error) => {
        toast.error( error.code , {id: toastId})
        console.log(error.message);
      });
  };


  return (
    <div className="flex justify-center items-center gap-20">
      <div>
        <img
          className="w-[700px]"
          src="https://i.ibb.co/Ypyhx4q/Mobile-login-pana.png"
          alt=""
        />
      </div>
      <div>
        <div>
          <div className=" flex justify-center mt-14 md:mt-20 lg:mt-28 px-5 md:px-0">
            <div className="relative flex w-full md:w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div className="relative mx-4 -mt-6 mb-4 grid h-20 md:h-28 place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-[#54C2C3] to-[#00463E] bg-clip-border text-white shadow-lg shadow-[#54C2C3]/40">
                <h3 className="block font-rancho text-xl md:text-4xl leading-snug tracking-normal text-white antialiased">
                  Register your account
                </h3>
              </div>
              <form onSubmit={handleRegister}>
                <div className="flex flex-col gap-4 p-6">
                  <div className="relative h-11 w-full min-w-[200px]">
                    <input
                      type="text"
                      name="name"
                      required
                      className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#54C2C3] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                      // eslint-disable-next-line react/no-unknown-property
                      placeHolder=" "
                    />
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#54C2C3] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#54C2C3] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#54C2C3] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                      Enter your name
                    </label>
                  </div>
                  <div className="relative h-11 w-full min-w-[200px]">
                    <input
                      type="text"
                      name="photoURL"
                      className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#54C2C3] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                      // eslint-disable-next-line react/no-unknown-property
                      placeHolder=" "
                    />
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#54C2C3] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#54C2C3] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#54C2C3] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                      Enter your photo URL
                    </label>
                  </div>
                  <div className="relative h-11 w-full min-w-[200px]">
                    <input
                      type="email"
                      name="email"
                      required
                      className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#54C2C3] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                      // eslint-disable-next-line react/no-unknown-property
                      placeHolder=" "
                    />
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#54C2C3] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#54C2C3] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#54C2C3] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                      Enter your email address
                    </label>
                  </div>
                  <div className="relative h-11 w-full min-w-[200px]">
                    <input
                      type="password"
                      name="password"
                      required
                      className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#54C2C3] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                      // eslint-disable-next-line react/no-unknown-property
                      placeHolder=" "
                    />
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#54C2C3] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#54C2C3] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#54C2C3] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                      Enter your password
                    </label>
                  </div>
                  <div className="-ml-2.5">
                    <div className="inline-flex items-center">
                      <label
                        className="relative flex cursor-pointer items-center rounded-full p-3"
                        htmlFor="checkbox"
                        data-ripple-dark="true">
                        <input
                          type="checkbox"
                          className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[#54C2C3] checked:bg-[#54C2C3] checked:before:bg-[#54C2C3] hover:before:opacity-10"
                          id="checkbox"
                        />
                        <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3.5 w-3.5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            stroke="currentColor"
                            strokeWidth="1">
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"></path>
                          </svg>
                        </span>
                      </label>
                      <label
                        className="mt-px cursor-pointer select-none font-light text-gray-700"
                        htmlFor="checkbox">
                        Accept Term & Conditions
                      </label>
                    </div>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <button
                    className="block w-full select-none rounded-lg bg-gradient-to-tr from-[#54C2C3] to-[#00463E] py-3 px-6 text-center align-middle font-rancho text-xl  text-white shadow-md shadow-[#54C2C3]/20 transition-all hover:shadow-lg hover:shadow-[#54C2C3]/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="submit"
                    data-ripple-light="true">
                    Register
                  </button>

                  <div className="flex justify-center items-center gap-2">
                    <p className="my-4 flex justify-center font-sans text-sm font-light leading-normal text-inherit antialiased">
                    Have an account?
                    </p>
                    <Link
                      to="/login"
                      className="ml-1 block font-rancho text-xl  leading-normal text-[#54C2C3] antialiased">
                      Login
                    </Link>
                  </div>

                </div>
              </form>
            </div>
          </div>
          <div className="mt-10 md:mt-14 lg:mt-24"></div>
        </div>
      </div>
    </div>
  );
};

export default Register;
