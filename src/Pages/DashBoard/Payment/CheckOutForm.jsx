import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

const CheckOutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError,setCardError] = useState('');


const handleSubmit = async (event)=>{
    event.preventDefault();
    if(!stripe || !elements){
        return 
    }

    const card = elements.getElement(CardElement)
    if(card===null){
        return
    }
    console.log(card);
      // Use your card Element with other Stripe.js APIs
      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });
      if (error) {
        console.log('[error]', error);
        setCardError(error.message)
      } else {
        console.log('[PaymentMethod]', paymentMethod);
        setCardError('')
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
      <button className="btn btn-success mt-4 btn-sm" type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
    {cardError && <p className="text-red-600">{cardError}</p>}
    </>
  )
}

export default CheckOutForm
