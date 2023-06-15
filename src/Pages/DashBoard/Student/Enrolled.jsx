import { useQuery } from "@tanstack/react-query"
import { useContext } from "react"
import { AuthContext } from "../../../Provider/AuthProvider"

const Enrolled = () => {
  const { user } = useContext(AuthContext)
  const { data: enrolled = [] } = useQuery({
    queryKey: ["enrolled"],
    queryFn: async () => {
      const res = await fetch(`https://summer-camp-server-eight-kappa.vercel.app/payment/${user?.email}`)
      return res.json()
    },
  })

  console.log(enrolled)
  return (
    <div className="w-[600px]">
      <h1 className="text-4xl text-center mb-8 font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text">
        MY ENROLLED CLASS
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th>Transaction Id</th>
            </tr>
          </thead>
          <tbody>
            {enrolled?.map((item, i) => (
              <tr key={item._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item?.picture} alt="class image" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item?.name}</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>{item?.price}</td>
          
                <th>
                  {item?.transactionId}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Enrolled
