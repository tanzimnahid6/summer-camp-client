import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useContext } from "react"
import { AuthContext } from "../../../Provider/AuthProvider"

const InstructorClass = () => {
  const { user } = useContext(AuthContext)
  const userEmail = user?.email
  const url = `http://localhost:5000/allClass/${userEmail}`

  const { data } = useQuery({
    queryKey: ["instructorClass"],
    queryFn: () => axios.get(url),
  })
  console.log()
  const instructorClass = data?.data || []
  console.log(instructorClass)

  return (
    <div>
      <h1>All added class which add by instructor </h1>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>#</label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {instructorClass.map((item, i) => (
              <tr key={item._id}>
                <th>
                  <label>{i + 1}</label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="/tailwind-css-component-profile-5@56w.png"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Yancy Tear</div>
                      <div className="text-sm opacity-50">Brazil</div>
                    </div>
                  </div>
                </td>
                <td>
                  Wyman-Ledner
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Community Outreach Specialist
                  </span>
                </td>
                <td>Indigo</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default InstructorClass
