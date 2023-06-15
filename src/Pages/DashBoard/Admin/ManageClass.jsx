import Swal from "sweetalert2"
import useClass from "../../../Hooks/useClasses"
import { useState } from "react"
import FeedBackModal from "../../../Components/Modal/FeedBackModal"


const ManageClass = () => {
  const [classes, loading, refetch] = useClass()

  const [modal, setModal] = useState(false)
  const [id, setId] = useState(null)
  const modalHandler = (id) => {
    setModal(true)
    console.log(id)
    setId(id)
  }
  const closeModal = () => {
    setModal(false)
  }



  const handleApproved = (id) => {
    fetch(`https://summer-camp-server-eight-kappa.vercel.app/allClass/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "approved" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "top",
            icon: "success",
            title: "Your status is updated",
            showConfirmButton: false,
            timer: 1500,
          })
        }
        refetch()
      })
  }

  const handleDeny = (id) => {
    fetch(`https://summer-camp-server-eight-kappa.vercel.app/allClass/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "pending" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "top",
            icon: "success",
            title: "Your status is updated",
            showConfirmButton: false,
            timer: 1500,
          })
        }
        refetch()
      })
  }
  if (loading == true) {
    return (
      <div className="pt-36 mx-4 flex justify-center items-center ">
        <progress className="progress bg-red-500 w-72"></progress>
        <span className="loading bg-red-600 loading-infinity loading-lg"></span>
      </div>
    )
  }
  return (
    <div className=" w-[1000px]">
      <h1 className="text-4xl text-center mb-8 font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text">
        MANAGE CLASS
      </h1>
      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th># </th>
                <th>Name</th>
                <th>Instructor</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {classes.map((item, i) => (
                <tr key={item._id}>
                  <th>{i + 1} </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item.picture}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{item.name}</div>
                        <div className="text-sm opacity-50">
                          Available Seat : {item.available_seats}
                        </div>
                        <div className="text-sm opacity-50">
                          Price : $ {item.price}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {item.instructor_name}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      {item.instructor_email}
                    </span>
                  </td>
                  <td>{item.status}</td>
                  <td className="flex flex-col gap-2 justify-start  items-center">
                    <button
                      onClick={() => handleApproved(item._id)}
                      className={`btn  btn-outline btn-xs`}
                    >
                      Approved
                    </button>
                    <button
                      onClick={() => handleDeny(item._id)}
                      className={`btn  btn-xs  btn-outline`}
                    >
                      Denied
                    </button>
                    <button
                      onClick={() => modalHandler(item._id)}
                      className={`btn  btn-xs  btn-outline`}
                    >
                      Feedback
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <FeedBackModal
        id={id}
        modalHandler={modalHandler}
        isOpen={modal}
        closeModal={closeModal}
        
      ></FeedBackModal>
    </div>
  )
}

export default ManageClass
