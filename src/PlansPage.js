import React, { useState } from 'react';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import './Plans.css';
import PaymentForm from './PaymentForm'; // Import the PaymentForm component
import Modal from './Modal'; // Import the Modal component

function PlansPage() {



  const stripePromise = loadStripe('pk_test_51NzNE9SHNiBeXcUjsnZ8GivH3FsjZ75NkbCuTMqm1zblNzVhkvj8cbZZQgabFiVzPuWznHbf2r9cNgEI5QWiBuv400130h5ApA');

  const [showPlans, setShowPlans] = useState(false);
  const [welcomeMessage, setWelcomeMessage] = useState('');
  const [isPaymentFormOpen, setPaymentFormOpen] = useState(false);
  const [isPaymentSuccessModalOpen, setPaymentSuccessModalOpen] = useState(false);

  const togglePlans = () => {
    setShowPlans(!showPlans);
  };

  const handleContinueFreePlan = () => {
    // Redirect to the home page (you should replace '/home' with your actual home page URL)
    window.location.href = './';

    // Set the welcome message
    setWelcomeMessage('WELCOME TO FREE PLAN!!!!!');
  };

  const openPaymentForm = () => {
    setPaymentFormOpen(true);
  };

  const closePaymentForm = () => {
    setPaymentFormOpen(false);
  };

  const handlePaymentSuccess = () => {
    closePaymentForm();
    // Set a flag in local storage to indicate successful payment
    localStorage.setItem('premiumPlanPurchased', 'true');
    // Show the payment success modal
    setPaymentSuccessModalOpen(true);
  };

  const closePaymentSuccessModal = () => {
    // Close the payment success modal
    setPaymentSuccessModalOpen(false);
    // Redirect to the home page
    window.location.href = './';
  };

  return (
    <div className="plans-container">
      <div className="plans-box">
        <div className="free-plans">
          <h3>Free Plans</h3>
          <ul>
            <li>Plan 1 - Free</li>
            <li>Plan 2 - Free</li>
          </ul>
          <button onClick={handleContinueFreePlan}>Continue Free Plan</button>
        </div>
      </div>

      <div className="plans-box">
        <div className="premium-plans">
          <h3>Premium Plans</h3>
          <ul>
            <li>Plan A - Premium</li>
            <li>Plan B - Premium</li>
          </ul>
          
        </div>
        <button onClick={openPaymentForm}>Pay Rs 600 for Premium Plan</button>
      </div>
  
      <div className='payment'>
      <Elements stripe={stripePromise}>
        {/* Render the PaymentForm */}
        {isPaymentFormOpen && (
          <PaymentForm onPaymentSuccess={handlePaymentSuccess} />
        )}
      </Elements>

      {/* Display the payment success modal */}
      {isPaymentSuccessModalOpen && (
        <Modal message="Payment done successfully!" onClose={closePaymentSuccessModal} />
      )}
      </div>
    </div>
  );
}

export default PlansPage;

