import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PaymentOptions.css'; // Import the CSS file
import upi_icon from '../image/upi_icon.png';
import debitcard_icon from '../image/debitcard_icon.png';
import netbanking_icon from '../image/netbanking_icon.jpeg';
import cash_on_delivery from '../image/cash_on_delivery.jpeg';
import ConfirmationModal from './ConfirmationModal';


const PaymentOptions = () => {
  const [selectedMethod, setSelectedMethod] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handlePayment = (method) => {
    setSelectedMethod(method);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsModalOpen(true);
  };

  const confirmPayment = () => {
    setIsModalOpen(false);
    navigate('/payment-success', { state: { paymentMethod: selectedMethod } });
  };

  const renderFormFields = () => {
    switch (selectedMethod) {
      case 'Credit Card':
      case 'Debit Card':
        return (
          <>
            <br /><br /><div>
              <label>Card Number:</label>
              <input className='poi' type="text" name="cardNumber" onChange={handleInputChange} required />
            </div>
            <div>
              <label>Expiry Date:</label>
              <input className='poi' type="text" name="expiryDate" onChange={handleInputChange} required />
            </div>
            <div>
              <label>CVV:</label>
              <input className='poi' type="text" name="cvv" onChange={handleInputChange} required />
            </div>
            <div>
              <label>Name on Card:</label>
              <input className='poi' type="text" name="cardName" onChange={handleInputChange} required />
            </div>
          </>
        );
      case 'UPI':
        return (
        <div>
            <br /><br />
            <label>UPI ID:</label>
            <input className='poi' type="text" name="upiId" onChange={handleInputChange} required />
          </div>
        );
      case 'Net Banking':
        return (
          <>
            <br /><br />
            <div>
              <label>Bank Name:</label>
              <input className='poi' type="text" name="bankName" onChange={handleInputChange} required />
            </div>
            <div>
              <label>Account Number:</label>
              <input className='poi' type="text" name="accountNumber" onChange={handleInputChange} required />
            </div>
            <div>
              <label>IFSC Code:</label>
              <input className='poi' type="text" name="ifscCode" onChange={handleInputChange} required />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (

    <div className="payment-container">
      <h2>Select Payment Method</h2>
      <div className="payment-options">
        <div className="payment-option" onClick={() => handlePayment('Credit Card')}>
          <img src={debitcard_icon} alt="Credit Card" style={{height:'60px',width:'140px'}}/>
          <span>Credit Card</span>
        </div>
        <div className="payment-option" onClick={() => handlePayment('Debit Card')}>
          <img src={debitcard_icon} alt="Debit Card" style={{height:'60px',width:'140px'}}/>
          <span>Debit Card</span>
        </div>
        <div className="payment-option" onClick={() => handlePayment('Net Banking')}>
          <img src={netbanking_icon} alt="Net Banking" style={{height:'60px',width:'100px'}}/>
          <span>Net Banking</span>
        </div>
        <div className="payment-option" onClick={() => handlePayment('UPI')}>
          <img src={upi_icon} alt="UPI" style={{height:'60px',width:'100px'}}/>
          <span>UPI</span>
        </div>
        <div className="payment-option" onClick={() => handlePayment('Cash on Delivery')}>
          <img src={cash_on_delivery} alt="Cash on Delivery" style={{height:'60px',width:'100px'}}/>
          <span>Cash on Delivery</span>
        </div>
        </div>
      {selectedMethod && (
        <form onSubmit={handleSubmit}>
          {renderFormFields()}
          <button type="submit">Submit</button>
        </form>
      )}
      <ConfirmationModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        onConfirm={confirmPayment}
        paymentMethod={selectedMethod}
      />
    </div>
  );
};

export default PaymentOptions;