// src/components/ConfirmationModal.js
import { Button } from '@mui/material';
import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const ConfirmationModal = ({ isOpen, onRequestClose, onConfirm, paymentMethod }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Confirm Payment"
    >
      <h2>Confirm Payment</h2>
      <p>Are you sure you want to pay with {paymentMethod}?</p>
      <Button onClick={onConfirm}>Confirm</Button>&nbsp;&nbsp;
      <Button onClick={onRequestClose}>Cancel</Button>
    </Modal>
  );
};

export default ConfirmationModal;