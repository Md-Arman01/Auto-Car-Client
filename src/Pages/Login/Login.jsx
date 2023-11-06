/* eslint-disable react/no-unescaped-entities */
import Lottie from "lottie-react";
import loginAnimation from "../../assets/Lotties/loginEnimation.json";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { BiLogoGithub } from 'react-icons/bi';
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate()
  const {loginUser, loginWithGoogle, loginWithGithub} = useAuth()


  const handleLogin = (e) => {
    e.preventDefault();
    const toastId = toast.loading('Loggin in...')

    const email = e.target.email.value;
    const password = e.target.password.value;
    

    loginUser(email, password)
      .then((result) => {
        toast.success('Login Successfully!', { id: toastId })
        navigate('/')
        console.log(result.user);
      })
      .catch((error) => {
        toast.error( error.code , {id: toastId})
      });
  };

  const handleGoogleLogin = () => {
    const toastId = toast.loading('Loggin in...')
    
    loginWithGoogle()
      .then((result) => {
        console.log(result.user)
        toast.success('Login Successfully!', { id: toastId })
        navigate('/')

      })
      .catch((error) => {
        toast.error( error.code , {id: toastId})
      });
  };
  const handleGithubLogin = () => {
    const toastId = toast.loading('Loggin in...')
    
    loginWithGithub()
      .then((result) => {
        console.log(result.user);
        toast.success('Login Successfully!', { id: toastId })
        navigate("/");
      })
      .catch((error) => {
        toast.error( error.code , {id: toastId})
      });
  };







  return (
    <div className=" container mx-auto flex justify-center items-center gap-20">
      <div>
        <Lottie className="w-[700px]" animationData={loginAnimation}></Lottie>
      </div>
      <div>
        <div className="flex justify-center mt-14 md:mt-20 lg:mt-28 px-5 md:px-0">
          <div className="relative flex w-full md:w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative mx-4 -mt-6 mb-4 grid h-20 md:h-28 place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-[#54C2C3] to-[#00463E] bg-clip-border text-white shadow-lg shadow-[#54C2C3]/40">
              <h3 className="block font-rancho text-xl md:text-4xl  leading-snug tracking-normal text-white antialiased">
                Login your account
              </h3>
            </div>
            <form onSubmit={handleLogin}>
              <div className="flex flex-col gap-4 p-6">
                <div className="relative h-11 w-full min-w-[200px]">
                  <input
                    type="email"
                    name="email"
                    className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#54C2C3] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    // eslint-disable-next-line react/no-unknown-property
                    placeHolder=" "
                    required
                  />
                  <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#54C2C3] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#54C2C3] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#54C2C3] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Email address
                  </label>
                </div>
                <div className="relative h-11 w-full min-w-[200px]">
                  <input
                    type="password"
                    name="password"
                    className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#54C2C3] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    // eslint-disable-next-line react/no-unknown-property
                    placeHolder=" "
                    required
                  />
                  <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#54C2C3] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#54C2C3] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#54C2C3] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Password
                  </label>
                </div>
                
              </div>
              <div className="p-6 pt-0">
                <button
                  className="normal-case block w-full select-none rounded-lg bg-gradient-to-tr from-[#54C2C3] to-[#00463E] py-3 px-6 text-center align-middle font-rancho text-xl   text-white shadow-md shadow-[#54C2C3]/20 transition-all hover:shadow-lg hover:shadow-[#54C2C3]/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="submit"
                  data-ripple-light="true">
                  Login
                </button>
              </div>
            </form>
            <h1 className="text-center font-medium text-lg -my-4">or</h1>
            <div className="flex flex-col space-y-2 px-6 mt-5">
              <button
                onClick={handleGoogleLogin}
                className="btn btn-outline btn-info normal-case">
                <FcGoogle className="text-xl"></FcGoogle>Login With Google
              </button>
              <button
                onClick={handleGithubLogin}
                className="btn btn-outline normal-case">
                <BiLogoGithub className="text-xl"></BiLogoGithub>Login With
                Github
              </button>
            </div>

            <div className="flex justify-center items-center gap-2">
            <p className="my-4 flex justify-center font-sans text-sm font-light leading-normal text-inherit antialiased">
              Don't have an account?
            </p>
              <Link
                to="/register"
                className="ml-1 block font-rancho text-xl  leading-normal text-[#54C2C3] antialiased">
                Register
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
