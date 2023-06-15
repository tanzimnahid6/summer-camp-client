import { useForm } from "react-hook-form"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { useContext } from "react"
import { AuthContext } from "../../../Provider/AuthProvider"
import { convertData } from "../../../util/convertDate"
import Swal from "sweetalert2"
const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN

const AddClass = () => {
  const { user } = useContext(AuthContext)
  const userEmail = user?.email
  const userName = user?.displayName;
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset
  } = useForm()
  const startingDate = watch("starting_date")
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

  const onSubmit = (data) => {
    //uploading image=================================================================
    const formData = new FormData()
    formData.append("image", data.picture[0])
    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        console.log(imgResponse)
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url

          const {
            available_seats,
            price,
            rating,
            starting_date,
            description,
            instructor_email,
            instructor_image,
            instructor_name,
            instructor_popularity,
            name,
          } = data
          const newClass = {
            available_seats: parseInt(available_seats),
            price: parseFloat(price),
            rating: parseFloat(rating),
            starting_date: convertData(starting_date),
            description,
            instructor_email,
            instructor_image,
            instructor_name,
            instructor_popularity,
            name,
            picture: imgURL,
            status:"pending",
            enrolled_classes:parseFloat(0) 
          }

          //upload data in to database==========================================
          fetch(`https://summer-camp-server-eight-kappa.vercel.app/allClass`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newClass),
          })
            .then((response) => response.json())
            .then((result) => {
              console.log(result)
              reset()
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "New Class added successfully",
                showConfirmButton: false,
                timer: 1500,
              })
            })
        }
      })
  }

  return (
    <div className="w-[800px] mx-auto   ">
     <h1 className="text-4xl text-center mb-8 font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text">ADD A NEW CLASS</h1>
      <form className="flex w-full gap-4 border-2 p-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full">
          <div className="mb-4">
            <label htmlFor="name" className="block font-medium mb-1">
              Class Name
            </label>
            <input
             type="text"
              
              id="name"
              {...register("name", { required: true })}
              className="border border-gray-300 rounded-md p-2 w-full"
            />
            {errors.name && (
              <span className="text-red-500">Name is required</span>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="starting_date" className="block font-medium mb-1">
              Starting Date
            </label>
            <DatePicker
              id="starting_date"
              selected={startingDate ? new Date(startingDate) : null}
              onChange={(date) =>
                setValue("starting_date", date, { shouldValidate: true })
              }
              className="border border-gray-300 rounded-md p-2 w-full"
            />
            {errors.starting_date && (
              <span className="text-red-500">Starting date is required</span>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="available_seats" className="block font-medium mb-1">
              Available Seats
            </label>
            <input
              type="number"
              id="available_seats"
              {...register("available_seats", { required: true })}
              className="border border-gray-300 rounded-md p-2 w-full"
            />
            {errors.available_seats && (
              <span className="text-red-500">Available seats is required</span>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="instructor_name" className="block font-medium mb-1">
              Instructor Name
            </label>
            <input
              type="text"
              readOnly
              
              defaultValue={userName}
              id="instructor_name"
              {...register("instructor_name", { required: true })}
              className="border border-gray-300 rounded-md p-2 w-full"
            />
            {errors.instructor_name && (
              <span className="text-red-500">Instructor name is required</span>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="instructor_popularity"
              className="block font-medium mb-1"
            >
              Instructor Popularity
            </label>
            <select
              id="instructor_popularity"
              {...register("instructor_popularity", { required: true })}
              className="border border-gray-300 rounded-md p-2 w-full"
            >
              <option value="">Select</option>
              <option value="High">High</option>
              <option value="Moderate">Moderate</option>
              <option value="Low">Low</option>
            </select>
            {errors.instructor_popularity && (
              <span className="text-red-500">
                Instructor popularity is required
              </span>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="instructor_image"
              className="block font-medium mb-1"
            >
              Instructor Image
            </label>
            <input
              type="text"
              id="instructor_image"
              {...register("instructor_image", { required: true })}
              className="border border-gray-300 rounded-md p-2 w-full"
            />
            {errors.instructor_image && (
              <span className="text-red-500">Instructor image is required</span>
            )}
          </div>
        </div>

        <div className="w-full">
          <div className="mb-4">
            <label
              htmlFor="instructor_email"
              className="block font-medium mb-1"
            >
              Instructor Email
            </label>
            <input
              type="email"
              readOnly
              defaultValue={userEmail}
              id="instructor_email"
              {...register("instructor_email", { required: true })}
              className="border border-gray-300 rounded-md p-2 w-full"
            />
            {errors.instructor_email && (
              <span className="text-red-500">Instructor email is required</span>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="price" className="block font-medium mb-1">
              Price
            </label>
            <input
              type="number"
              id="price"
              {...register("price", { required: true })}
              className="border border-gray-300 rounded-md p-2 w-full"
            />
            {errors.price && (
              <span className="text-red-500">Price is required</span>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="rating" className="block font-medium mb-1">
              Rating
            </label>
            <input
              type="number"
              id="rating"
              {...register("rating", { required: true })}
              className="border border-gray-300 rounded-md p-2 w-full"
            />
            {errors.rating && (
              <span className="text-red-500">Rating is required</span>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block font-medium mb-1">
              Description
            </label>
            <textarea
              id="description"
              {...register("description", { required: true })}
              className="border border-gray-300 rounded-md p-2 w-full"
            />
            {errors.description && (
              <span className="text-red-500">Description is required</span>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="picture" className="block font-medium mb-1">
              Picture
            </label>
            <input
              type="file"
              id="picture"
              {...register("picture", { required: true })}
              className="border border-gray-300 rounded-md p-2 w-full"
            />
            {errors.picture && (
              <span className="text-red-500">Picture is required</span>
            )}
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddClass
