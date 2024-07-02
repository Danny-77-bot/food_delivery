import React from 'react';
import './header.css';

export default function Header() {
  return (
    <div className='header'>
      <div className='header-contents'>
        <h2>Order Your Favorite Food Here</h2>
        <p>
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise. Our
          mission is to satisfy your cravings and elevate your dining
          experience, one delicious meal at a time.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
}

