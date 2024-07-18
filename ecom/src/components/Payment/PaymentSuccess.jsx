import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PaymentSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="payment-success-container">
      <h2>Payment Successful</h2>
      <p>Your payment using {location.state?.paymentMethod} was successful!</p>
      <button onClick={() => navigate('/')}>Go to Home</button>
    </div>
  );
};

export default PaymentSuccess;