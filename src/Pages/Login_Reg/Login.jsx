import { useContext, useState } from "react"
import { useForm } from "react-hook-form"
import { AuthContext } from "../../Provider/AuthProvider"

import { Link, useLocation, useNavigate } from "react-router-dom"

const Login = () => {
  const { signIn } = useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || "/"
  console.log(from);

  //show and hide password ================
  const [show,setShow] = useState(false)
  const handleShowPassword=()=>{
    setShow(!show)
  }
  

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    signIn(data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user
        console.log(user);
        navigate('/classes')
      
      })
      .catch((error) => {
        console.log("create user error", error)
      })
  }

  return (
    <div className="flex justify-center items-center pt-28 ">
      <div className="bg-white shadow-lg rounded p-8 max-w-sm w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
              className={`w-full px-3 py-2 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.email && (
              <span className="text-red-500 text-sm mt-1">
                Please enter a valid email address
              </span>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block mb-2">
              Password
            </label>
           
            <input
              type={show?'text':'password'}
              
              id="password"
              {...register("password", {
                required: true,
                minLength: 8,
                pattern:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[a-zA-Z\d!@#$%^&*()]{8,}$/,
              })}
              className={`w-full px-3 py-2 border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            <div onClick={handleShowPassword} className="btn btn-error btn-outline btn-xs mt-2">{!show?'Show':'Hide'}</div>
            
            {errors.password && (
              <span className="text-red-500 text-sm mt-1">
                Password must be at least 8 characters long and contain at least
                one uppercase letter, one lowercase letter, and one number.
              </span>
            )}
          </div>
          <div className="my-4 ">
            <p>
              Do you have any account6 ?
              <Link to="/signup" className="text-blue-500">
                Sing up
              </Link>
            </p>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
