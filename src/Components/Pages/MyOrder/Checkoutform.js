import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Checkoutform = () => {
   const [error, setError] = useState("");
   const [clientSecret, setClientSecret] = useState("");
   const [processing, setProcessing] = useState(false);
   const stripe = useStripe();
   const elements = useElements();
   const navigate = useNavigate();

  //  useEffect(() => {
  //    fetch("https://doctors-server-one.vercel.app/create-payment-intent", {
  //      method: "POST",
  //      headers: {
  //        "Content-Type": "application/json",
  //        authToken: `bearer ${localStorage.getItem("doctorsToken")}`,
  //      },
  //      body: JSON.stringify({}),
  //    })
  //      .then((res) => res.json())
  //      .then((data) => setClientSecret(data.clientSecret));
  //  }, []);

  //  const handleSubmit = async (e) => {
  //    e.preventDefault();

  //    if (!stripe || !elements) {
  //      return;
  //    }

  //    const card = elements.getElement(CardElement);

  //    if (card == null) {
  //      return;
  //    }

  //    const { error, paymentMethod } = await stripe.createPaymentMethod({
  //      type: "card",
  //      card,
  //    });

  //    if (error) {
  //      setError(error.message);
  //    } else {
  //      setError("");
  //    }
  //    setProcessing(true);
  //    const { paymentIntent, error: errorElement } =
  //      await stripe.confirmCardPayment(clientSecret, {
  //        payment_method: {
  //          card: card,
  //        },
  //      });
  //    setProcessing(false);
  //    if (errorElement) {
  //      setError(errorElement.message);
  //     //  toast.error("Payment Cancelled");
  //    } else {
  //      setError("");
      //  toast.success(`Your payment is successful ${paymentIntent.id}`);

      //  const paymentInformation = {
      //    appointmentID: _id,
      //    amount: paymentIntent.amount / 100,
      //    paymentDate: new Date().toLocaleDateString,
      //    currency: paymentIntent.currency,
      //    transactionID: paymentIntent.id,
      //    paymentMethod: paymentIntent.payment_method_types[0],
      //    patientEmail: patientEmail,
      //  };

      //  fetch(`https://doctors-server-one.vercel.app/storedpaymentInfo`, {
      //    method: "POST",
      //    headers: {
      //      "Content-Type": "application/json",
      //      authToken: `bearer ${localStorage.getItem("doctorsToken")}`,
      //    },
      //    body: JSON.stringify(paymentInformation),
      //  })
    //      .then((res) => res.json())
    //      .then((data) => {
    //        if (data.acknowledged) {
    //          navigate("/dashboardmain/");
    //        }
    //        console.log(data);
    //      })
    //      .catch((err) => console.log(err.message));
    //  }
   

   return (
     <div className="p-8">
      
     </div>
   );
   }
export default Checkoutform;