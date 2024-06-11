import React from 'react';
import './Button.css';

const Button = ({ label, onClick }) => (
  <button className="kwaai-button" onClick={onClick}>
    {label}
  </button>
);

export default Button;
