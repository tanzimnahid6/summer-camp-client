import { Elements } from "@stripe/react-stripe-js"
import CheckOutForm from "./CheckOutForm"
import { loadStripe } from "@stripe/stripe-js";


const stripePromise = loadStripe(import.meta.env.VITE_PK);

const Payment = () => {
  return (
    <div className="w-[500px]">
      <h1>Payment here</h1>
      <Elements stripe={stripePromise}>
        <CheckOutForm></CheckOutForm>
      </Elements>
    </div>
  )
}

export default Payment
