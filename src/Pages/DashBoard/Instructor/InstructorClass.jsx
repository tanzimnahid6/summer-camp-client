import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useContext } from "react"
import { AuthContext } from "../../../Provider/AuthProvider"

const InstructorClass = () => {
  const { user } = useContext(AuthContext)
  const userEmail = user?.email
  const url = `https://summer-camp-server-eight-kappa.vercel.app/allClass/${userEmail}`

  const { data } = useQuery({
    queryKey: ["instructorClass"],
    queryFn: () => axios.get(url),
  })
  console.log()
  const instructorClass = data?.data || []
  console.log(instructorClass)

  return (
    <div className="w-[900px]">
      <h1 className="text-4xl text-center mb-8 font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text">
        YOUR CLASS STATUS
      </h1>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class Name</th>
              <th>Status</th>
              <th>Total Enrolled</th>

              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {instructorClass.map((item, i) => (
              <tr key={item._id}>
                <td>
                  <label>{i + 1}</label>
                </td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div>
                      <div className="font-bold">{item.name}</div>
                      <div className="text-sm opacity-50">$ {item.price}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <div>
                    {item.status} <br />
                    {item?.feedback&& <span className="text-red-600">{item.feedback&&item.feedback}</span>}
                  </div>
                </td>
                <td>{item.enrolled_classes}</td>

                <td>
                  <div className="btn btn-info btn-sm">Update</div> <br />
                  <div className="btn btn-error btn-sm my-2">Delete</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default InstructorClass
