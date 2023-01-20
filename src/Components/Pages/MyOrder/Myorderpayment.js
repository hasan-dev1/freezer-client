import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import Checkoutform from './Checkoutform';
const stripePromise = loadStripe(
  "pk_test_51M6JfkFG110SVNLeM1ohOCMle877ylgnIusa6b9V1YF7QzyaZnchPQVnIhkyC07ozwYlB1UPlXcNQlPppJAtn9nn0099nvGJ2Q"
);


const Myorderpayment = () => {
  const un = {name:'parvez'}
    return (
      <div>
        <div className='text-center'>
          <p>Payment</p>
          <input
            className="input input-bordered"
            type="text"
            name="paymentmethod"
          />
          <button className='btn block btn-primary px-6 w-[120px] mx-auto my-2 '>Pay</button>
        </div>
        <div>
          <Elements stripe={stripePromise}>
            <Checkoutform ></Checkoutform>
          </Elements>
        </div>
      </div>
    );
};

export default Myorderpayment;