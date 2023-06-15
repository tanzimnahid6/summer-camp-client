import { useContext } from "react"
import useDataByEmail from "../../../Hooks/useDataByEmail "
import { AuthContext } from "../../../Provider/AuthProvider"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const SelectClass = () => {
    
  const { user } = useContext(AuthContext)
  const { data, refetch } = useDataByEmail(user?.email)
  console.log(data)
  const handleDelete = (id) => {
    console.log(id)
    fetch(`https://summer-camp-server-eight-kappa.vercel.app/selectClass/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((d) => {
        console.log(d)
        refetch()
      })
  }

 

  return (
    <div>
      <h1 className="text-4xl text-center mb-8 font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text">
        MY SELECTED CLASS
      </h1>
      <motion.div
        initial={{ opacity: 0, y: "1rem" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Price</th>
                <th>Start</th>
                <th>Action</th>
                <th>Payment</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item, i) => (
                <tr key={item._id}>
                  <th>
                    <label>{i + 1}</label>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div>
                        <div className="font-bold">{item.name}</div>
                        <div className="text-sm opacity-50">
                          Instructor:{item.instructor_name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>$ {item.price}</td>
                  <td>{item.starting_date}</td>
                  <th>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn btn-ghost btn-xs"
                    >
                      Delete
                    </button>
                  </th>
                  <th>
                    <Link to={`/dashBoard/payment/${item._id}`} className="btn btn-error btn-sm">pay</Link>
                    {/* <Link  onClick={()=>sendPrice(item.price)} className="btn btn-error btn-sm">pay</Link> */}

                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  )
}

export default SelectClass
