import { useContext } from "react"
import { AuthContext } from "../../Provider/AuthProvider"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"

const ClassCard = ({ item }) => {
    const navigate = useNavigate()
  const { user } = useContext(AuthContext)
  const handleSelect = () => {
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
         
          navigate('/login')
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
            <button onClick={handleSelect} className="btn btn-primary">
              Select
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClassCard
