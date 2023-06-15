import { useContext } from "react"
import { AuthContext } from "../../Provider/AuthProvider"
import Swal from "sweetalert2"
import {   useLocation, useNavigate } from "react-router-dom"
// import useDataByEmail from "../../Hooks/useDataByEmail "
import useRole from "../../Hooks/useRole"

const ClassCard = ({ item }) => {
  const navigate = useNavigate()
  const { user } = useContext(AuthContext)
  const role = useRole()
  const location = useLocation()
  console.log(location);

  // const isStudent = role === "admin" 
  const isStudent = role === "admin" || role ==='instructor'

  console.log(isStudent);
 
  const handleSelect = (item) => {
    console.log(item)


    if (!user) {
      
      Swal.fire({
        title: "Are you select the class?",
        text: "If you want to select this class,you have to login first",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: location })
          
         
          
        }
      })
    } else {
      const newItem = {
        // ...item,
        available_seats: parseFloat(item.available_seats),
        description:item.description,
        enrolled_classes:parseFloat(item.enrolled_classes),
        instructor_email:item.instructor_email,
        instructor_image:item.instructor_image,
        instructor_name:item.instructor_name,
        instructor_popularity:item.instructor_popularity,
        name:item.name,
        starting_date:item.starting_date,
        picture:item.picture,
        price:parseFloat(item.price),
        rating:parseFloat(item.rating),
        status:item.status,
        userEmail: user?.email,
      }
      fetch(`https://summer-camp-server-eight-kappa.vercel.app/selectClass`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newItem),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          if (data.warning) {
            Swal.fire({
              position: "top",
              icon: "error",
              title: "Your class already exits",
              showConfirmButton: false,
              timer: 1500,
            })
          }else{
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your class has been saved",
              showConfirmButton: false,
              timer: 1500,
            })
          }
        })
    }
  }
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            className="w-full h-72 object-cover rounded-lg"
            src={item.picture}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{item.name}</h2>
          <p>Instructor:{item.instructor_name}</p>
          <p>Available Seats {item.available_seats}</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => handleSelect(item)}
              className="btn btn-primary"
              disabled={isStudent ? true : false}
            >
              Select
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClassCard
