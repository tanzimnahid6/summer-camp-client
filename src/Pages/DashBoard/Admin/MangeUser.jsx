import Swal from "sweetalert2"
import useUsers from "../../../Hooks/useUsers"

const MangeUser = () => {
  const [users, , refetch] = useUsers()
  //   console.log(users)

  //Admin make another user admin
  const handleAdmin = (id) => {
    console.log(id)
    fetch(`https://summer-camp-server-eight-kappa.vercel.app/updateUserRole/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ role: "admin" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User role admin done",
            showConfirmButton: false,
            timer: 1000,
          })
        }
        console.log(data)
        refetch()
      })
  }

  //admin make instructor=================
  const handleInstructor = (id) => {
    console.log(id)

    fetch(`https://summer-camp-server-eight-kappa.vercel.app/updateUserRole/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ role: "instructor" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Admin change the role",
            showConfirmButton: false,
            timer: 1000,
          })
        }
        console.log(data)
        refetch()
      })
  }
  return (
    <div className="w-[600px]">
      <h1 className="text-4xl text-center mb-8 font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text">
        Manage Users
      </h1>
      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            <thead>
              <tr>
                <th>#</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((item, i) => (
                <tr key={item._id}>
                  <th>{i + 1}</th>
                  <td>{item.email}</td>
                  <td>{item.role}</td>
                  <td className="flex flex-col gap-2 ">
                    <button
                      onClick={() => handleAdmin(item._id)}
                      className={`btn btn-sm btn-info`}
                      disabled={item.role=='admin'  && true}
                      
                    >
                      Admin
                    </button>
                    <div
                      onClick={() => handleInstructor(item._id)}
                      className="btn btn-sm btn-success"
                      disabled={ item.role=='instructor' && true}
                    >
                      Instructor
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default MangeUser
