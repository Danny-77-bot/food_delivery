// Cart.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './cart.css';

export default function Cart() {
  return (
    <div className='cart'>
      <h2>Your Shopping Cart</h2>
      <p>Cart items go here...</p>
      {/* Example of using Link to navigate */}
      <Link to="/">Go to Home</Link>
    </div>
  );
}
