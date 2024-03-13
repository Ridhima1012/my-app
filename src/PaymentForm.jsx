import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const PaymentForm = ({ onPaymentSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const result = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
      billing_details: {
        email: email,
      },
    });

    if (result.error) {
      setError(result.error.message);
    } else {
      // Handle successful payment
      onPaymentSuccess();
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        {/* <div>
          <label>Card Details:</label>
          <CardElement />
        </div> */}
        <a href="https://buy.stripe.com/test_6oEbLCaQE34VgNi000"  className="btn btn-primary">Make Payment</a>
        {/* <button type="submit" disabled={!stripe}>
          Pay Rs 600 for Premium Plan
        </button> */}
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default PaymentForm;
