import { Elements } from "@stripe/react-stripe-js"
import CheckOutForm from "./CheckOutForm"
import { loadStripe } from "@stripe/stripe-js"
import { useParams } from "react-router-dom"
import useDataByEmail from "../../../Hooks/useDataByEmail "
import { AuthContext } from "../../../Provider/AuthProvider"
import { useContext } from "react"

const stripePromise = loadStripe(import.meta.env.VITE_PK)

const Payment = () => {
  const { user } = useContext(AuthContext)
  const { data } = useDataByEmail(user?.email)
  const { id } = useParams()
  const needForPay = data?.find((item) => item._id === id)
  const price = parseInt(needForPay?.price)
  console.log(price)

  return (
    <div className="w-[500px]">
      <h1>Payment here</h1>
      <Elements stripe={stripePromise}>
        <CheckOutForm id={id} price={price} name={needForPay?.name} picture={needForPay?.picture}></CheckOutForm>
      </Elements>
    </div>
  )
}

export default Payment
