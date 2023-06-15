import { useQuery } from "@tanstack/react-query"
import { useContext } from "react"
import { AuthContext } from "../../../Provider/AuthProvider"

const PaymentHistory = () => {
  const { user } = useContext(AuthContext)
  const { data: history = [] } = useQuery({
    queryKey: ["enrolled"],
    queryFn: async () => {
      const res = await fetch(`https://summer-camp-server-eight-kappa.vercel.app/payment/${user?.email}`)
      return res.json()
    },
  })

 
  return (
    <div className="w-[800px]">
      <h1 className="text-4xl text-center mb-8 font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text">
        Payment History
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Transaction Id</th>
              <th>Payment Date</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {history.map((item, i) => (
              <tr key={item._id}>
                <th>{i + 1}</th>
                <td>{item?.name}</td>
                <td>{item.transactionId}</td>
                <td>{item?.date}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default PaymentHistory
