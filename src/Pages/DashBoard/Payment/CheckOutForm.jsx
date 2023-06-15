import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../../Provider/AuthProvider"
import Swal from "sweetalert2"
import { convertData } from "../../../util/convertDate"


const CheckOutForm = ({ price, id,name,picture }) => {
  const stripe = useStripe()
  const elements = useElements()
  const [cardError, setCardError] = useState("")
  const [clientSecret, setClientSecret] = useState("")
  const { user } = useContext(AuthContext)
  const [process, setProcess] = useState(false)
  const [transactionId, setTransactionId] = useState("")

  useEffect(() => {
    fetch(`https://summer-camp-server-eight-kappa.vercel.app/create-payment-intent`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ price:parseInt(price) }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setClientSecret(data.clientSecret)
      })
  }, [price])

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!stripe || !elements) {
      return
    }

    const card = elements.getElement(CardElement)
    if (card === null) {
      return
    }
    console.log(card)
    // Use your card Element with other Stripe.js APIs
    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    })
    if (error) {
      console.log("[error]", error)
      setCardError(error.message)
    } else {
      //   console.log("[PaymentMethod]", paymentMethod)
      setCardError("")
    }
    setProcess(true)

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      })
    if (confirmError) {
      setCardError(confirmError)
    }
    console.log("payment intent", paymentIntent)
    setProcess(false)
    if (paymentIntent.status === "succeeded") {
      const transactionId = paymentIntent.id
      setTransactionId(transactionId)

      //save payment information to server
      const payment = {
        email: user?.email,
        transactionId: transactionId,
        price,
        itemId: id,
        date: convertData(new Date()),
        name,
        picture,
        orderStatus: "pending",
      }
      fetch(`https://summer-camp-server-eight-kappa.vercel.app/payments`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          if (data.insertedId) {
            Swal.fire({
              position: "top",
              icon: "success",
              title: "Payment successfully done",
              showConfirmButton: false,
              timer: 1000,
            })
          }
        })
    }
  }

  return (
    <>
      <form className="p-4" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-success mt-4 btn-sm"
          type="submit"
          disabled={!stripe || !clientSecret || process}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-600">{cardError}</p>}
      {transactionId && (
        <p className="text-green-600">
          Transaction compleat with transaction id :{transactionId}
        </p>
      )}
    </>
  )
}

export default CheckOutForm
