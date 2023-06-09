import { useContext } from "react"
import { useForm } from "react-hook-form"
import { FcGoogle } from "react-icons/fc"
import { AuthContext } from "../../Provider/AuthProvider"
import Swal from "sweetalert2"
import { Link } from "react-router-dom"
import { saveUser } from "../../util/Auth"

const SignUp = () => {
  const { createUser, loginGoogle, updateUserProfile } = useContext(AuthContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)

    //create user and update user profile
    createUser(data.email, data.password)
      .then((userCredential) => {
        //update user profile
        console.log(userCredential.user);
        saveUser(userCredential?.user)
        updateUserProfile(data.name, data.image)
        .then(() => {
    
        })
        
        const user = userCredential.user
        console.log(user)

        Swal.fire({
          position: "top",
          icon: "success",
          title: "User create successfully",
          showConfirmButton: false,
          timer: 1000,
        })
      })
      .catch((error) => {
        console.log("create user error", error)
      })
  }

  //login with google ====================================
  const googleLogin = () => {
    loginGoogle()
      .then((result) => {
        const user = result.user
        saveUser(user)
        console.log(user);
        updateUserProfile(user?.displayName, user?.photoURL )

        Swal.fire({
          position: "top",
          icon: "success",
          title: "User create successfully",
          showConfirmButton: false,
          timer: 1000,
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div className="container max-w-lg mx-auto px-4 pt-24 py-8">
      <h2 className="text-2xl font-bold text-center mb-4">SIGN UP</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            {...register("name", { required: true })}
            className={`w-full px-3 py-2 border ${
              errors.name ? "border-red-500" : "border-gray-300"
            } rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.name && (
            <span className="text-red-500 text-sm mt-1">
              Please enter your name
            </span>
          )}
        </div>

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
        {/* TODO:password type change */}
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2">
            Password
          </label>
          <input
            type="text"
            id="password"
            defaultValue={"!4aASDFWF"}
            {...register("password", { required: true, minLength: 8 })}
            className={`w-full px-3 py-2 border ${
              errors.password ? "border-red-500" : "border-gray-300"
            } rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.password && (
            <span className="text-red-500 text-sm mt-1">
              Password must be at least 8 characters long
            </span>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="image" className="block mb-2">
            Image Link
          </label>
          <input
            type="text"
            id="image"
            {...register("image", { required: true })}
            className={`w-full px-3 py-2 border ${
              errors.image ? "border-red-500" : "border-gray-300"
            } rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.image && (
            <span className="text-red-500 text-sm mt-1">
              Please enter the image link
            </span>
          )}
        </div>
        <div className="my-4 ">
          <p>
            Already have an account ?{" "}
            <Link to="/login" className="text-blue-500">
              Login
            </Link>
          </p>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300"
        >
          sign up
        </button>
      </form>
      <hr />

      <div className="text-center my-4">
        <button onClick={googleLogin} className="btn btn-outline ">
          Login with google <FcGoogle size={20}></FcGoogle>{" "}
        </button>
      </div>
    </div>
  )
}

export default SignUp
