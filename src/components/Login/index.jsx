import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

export default function Login() {


  const { register, handleSubmit, formState: { errors }, watch } = useForm({ mode: 'onChange' })

  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);

  const [content, setContent] = useState("");

  const [editEmail, setEditEmail] = useState(true);

  // const [emailExists, setEmailExists] = useState(false);

  const [formVisible, setFormVisible] = useState(true);

  const password = watch('password', '');





  const handleButtonClick = (btnContent) => {
    setContent(btnContent);
    setFormVisible(!formVisible);
  }

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };


  // const handleToggleEditEmail = () => {
  //   setEditEmail(!editEmail);
  // };


  // const checkEmailExists = (email) => {
  //   return true;
  // };



  // const handleContinueButton = (data) => {
  //   const { email } = data;
  //   const exists = checkEmailExists(email);
  //   setEmailExists(exists);
  //   // Redirect the user based on whether the email exists or not
  //   if (exists) {
  //     // Navigate to login page
  //     console.log("Navigate to login page");
  //     history.push('/login');
  //   } else {
  //     // Navigate to signup page
  //     console.log("Navigate to signup page");
  //     history.push('/signup');
  //   }

  //   setContent("signup");
  // };

  const onSubmit = (data) => {
    console.log(data);
    // if (content === "login") {
    //   // Navigate to login page
    //   console.log("Navigate to login page");
    //   history.push('/login');
    // } else {
    //   // Navigate to signup page
    //   console.log("Navigate to signup page");
    //   history.push('/signup');
    // }
  }

  // const switchToSignUp = () => {
  //   setContent("signup");
  // };

  // const switchToLogin = () => {
  //   setContent("login");
  // };



  return (
    <>
      {/* ============================================= Add your email to check if it exists or not in Database ============================================= */}
      {formVisible && (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">

          {/* ============================================= Only logo and h1 ============================================= */}
          <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
            <img
              className="mx-auto h-16 w-auto"
              src="./tab.png"
              alt="Jumia Logo"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Welcome To Jumia
            </h2>
            <p className='text-center mt-2'>Type your e-mail or phone number to log in or create a Jumia account.</p>
          </div>

          {/* ============================================= Add Email to check ============================================= */}
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div>

                <label htmlFor="email" className="flex text-sm font-medium leading-6 text-gray-900">Email address</label>

                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder='Email'
                    required
                    className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                    {...register("email", { required: true, pattern: /^[a-zA-Z0-9]{3,30}(@)(gmail|yahoo)(.com)$/ })}
                  />
                  {errors.email && <p className="text-red-700 border-red-700">Invalid Email</p>}
                </div>
              </div>


              <div>
                <button
                  type="submit"
                  // onClick={handleSubmit((data) => handleContinueButton(data))}
                  onClick={() => handleButtonClick("login")}
                  // onClick={() => handleContinueButton()}
                  className="flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >Continue</button>
              </div>

            </form>

          </div>

        </div>
      )}


      {/* ============================================================ Login Page And Signup Page =========================================================== */}
      <div className='flex justify-center'>

        <div className="lg:w-3/4 md:w-2/4 rounded flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8">

          <div className="h-full">


            {/* login */}
            {content === "login" && (
              <div>
                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">

                  {/* =================================================== Login Header =================================================== */}
                  <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
                    <img
                      className="mx-auto h-16 w-auto"
                      src="./tab.png"
                      alt="Jumia Logo"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                      Welcome To Jumia
                    </h2>
                    <p className='text-center mt-2'>Log back into your Jumia account.</p>
                  </div>

                  {/* ======================================================= Form ======================================================= */}
                  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit(onSubmit)}>

                      {/* Email */}
                      <div>

                        <label htmlFor="email" className="flex text-sm font-medium leading-6 text-gray-900">Email address</label>

                        <div className="mt-2 relative rounded-md border-black p-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6">
                          <input
                            id="email"
                            name="email"
                            placeholder='Email'
                            autoComplete="email"
                            type='text'
                            // readOnly={editEmail ? true : false}
                            readOnly
                            required
                            className="block w-full rounded-md bg-gray-300 border-black p-2 text-gray-900 shadow-sm ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6 focus:outline-none"
                            {...register("email", { required: true, pattern: /^[a-zA-Z0-9]{3,30}(@)(gmail|yahoo)(.com)$/ })}
                          />

                          <button type='button' className="absolute inset-y-0 right-0 pr-4 text-orange-600 " onClick={() => handleButtonClick()} >
                            Edit
                          </button>

                        </div>

                        {errors.email && <p className="text-red-700 border-red-700">Invalid Email</p>}

                      </div>

                      {/* Password */}
                      <div>
                        <div className="flex items-center justify-between">

                          <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                            Password
                          </label>

                        </div>

                        <div className="mt-2 relative rounded-md border-black p-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6">

                          <input
                            id="password"
                            name="password"
                            placeholder='Password'
                            type={showPassword ? 'password' : 'text'}
                            required
                            className="block w-full rounded-md border-black p-2 text-gray-900 shadow-sm ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6 focus:outline-none"
                            {...register("password", { required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/ })}
                          />

                          <button type='button' className="absolute inset-y-0 right-0 pr-5" onClick={handleTogglePasswordVisibility}>
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                          </button>
                        </div>

                        {errors.password && <p className="text-red-700 border-red-700">Invalid Password</p>}

                      </div>

                      {/* Login Button */}
                      <div>
                        <button
                          type="submit"
                          className="flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >Login</button>
                      </div>

                    </form>

                  </div>

                </div>
              </div>
            )}

            {/* signup */}
            {content === "signup" && (
              <div>
                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">

                  {/* =================================================== Signup Header =================================================== */}
                  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                      className="mx-auto h-16 w-auto"
                      src="./tab.png"
                      alt="Jumia Logo"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                      Create your account
                    </h2>
                    <p className='text-center mt-2 text-sm'>Let's get started by creating your account.</p>
                    <p className='text-center mt-2 text-sm'>To keep your account safe, we need a strong password</p>

                  </div>

                  {/* ======================================================= Form ======================================================= */}
                  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit(onSubmit)}>

                      {/* Email */}
                      <div>

                        <label htmlFor="email" className="flex text-sm font-medium leading-6 text-gray-900">
                          Email address
                        </label>

                        <div className="mt-2 relative rounded-md border-black p-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6">
                          <input
                            id="email"
                            name="email"
                            placeholder='Email'
                            autoComplete="email"
                            type='text'
                            // readOnly={editEmail ? true : false}
                            readOnly
                            required
                            className="block w-full rounded-md bg-gray-300 border-black p-2 text-gray-900 shadow-sm ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6 focus:outline-none"
                            {...register("email", { required: true, pattern: /^[a-zA-Z0-9]{3,30}(@)(gmail|yahoo)(.com)$/ })}
                          />
                          <button type='button' className="absolute inset-y-0 right-0 pr-4 text-orange-600 " onClick={() => handleButtonClick()} >
                            Edit
                          </button>
                        </div>

                        {errors.email && <p className="text-red-700 border-red-700">Invalid Email</p>}

                      </div>

                      {/* Password */}
                      <div>
                        <div className="flex items-center justify-between">

                          <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                            Password
                          </label>

                        </div>

                        <div className="mt-2 relative rounded-md border-black p-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6">

                          <input
                            id="password"
                            name="password"
                            placeholder='Password'
                            type={showPassword ? 'password' : 'text'}
                            required
                            className="block w-full rounded-md border-black p-2 text-gray-900 shadow-sm ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6 focus:outline-none"
                            {...register("password", { required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/ })}
                          />

                          <button type='button' className="absolute inset-y-0 right-0 pr-5" onClick={handleTogglePasswordVisibility}>
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                          </button>
                        </div>

                        {errors.password && <p className="text-red-700 border-red-700">Invalid Password</p>}

                      </div>

                      {/* Confirm Password */}
                      <div>
                        <div className="flex items-center justify-between">

                          <label htmlFor="confirmPassword" className="block text-sm font-medium leading-6 text-gray-900">Confirm password</label>

                        </div>

                        <div className="mt-2 relative rounded-md border-black p-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6">

                          <input
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder='Password'
                            type={showConfirmPassword ? 'password' : 'text'}
                            required
                            className="block w-full rounded-md border-black p-2 text-gray-900 shadow-sm ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6 focus:outline-none"
                            {...register("confirmPassword", { required: true, validate: (value) => value === password || "Passwords do not match" })}
                          />

                          <button type='button' className="absolute inset-y-0 right-0 pr-5" onClick={handleToggleConfirmPasswordVisibility}>
                            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                          </button>
                        </div>

                        {errors.confirmPassword && <p className="text-red-700 border-red-700">Passwords do not match</p>}

                      </div>

                      {/* Continue Button */}
                      <div>
                        <button
                          type="submit"
                          className="flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >Continue</button>
                      </div>

                    </form>

                  </div>

                </div>
              </div>
            )}

          </div>

        </div>
      </div>


      {/* =============================================================== Footer of the form =============================================================== */}
      <div className='mb-10 sm:mx-auto sm:w-full sm:max-w-sm'>
        <p className="text-center text-sm text-black">For further support, you may visit the Help Center or contact our customer service team.</p>
        <img src="./logo.svg" alt="logo" className='mt-6 m-auto h-4' />
      </div>
    </>
  )
}






{/* <div className="text-sm flex justify-center">
                        <a href="#" className="font-semibold text-orange-500 hover:text-orange-600">
                          Forgot your password?
                        </a>
                      </div>
                      <div className="text-sm flex justify-center">
                        <a href="#" className="font-semibold text-orange-500 hover:text-orange-600">
                          Create New Account
                        </a>
                      </div> */}