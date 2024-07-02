import React, { useContext } from 'react';
import add_icon from '../../assets/add_icon.png';
import remove_icon from '../../assets/remove-icon.jpg';
import add_icon_green from '../../assets/add-icon-green.png';
import './foodItem.css';
import { StoreContext } from '../../context/storeContext';

export default function FoodItem({ id, name, price, desc, image }) {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  const itemCount = cartItems[id] || 0;

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt="" />
        {!itemCount ? (
          <img onClick={() => addToCart(id)} className="add-icon" src={add_icon} alt="" />
        ) : (
          <div className="food-item-counter">
            <img className="remove-icon" onClick={() => removeFromCart(id)} src={remove_icon} alt="" />
            <p>{itemCount}</p>
            <img className="add-green-icon" onClick={() => addToCart(id)} src={add_icon_green} alt="" />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <p>{name}</p>
        <div>
          <p className="food-item-desc">{desc}</p>
          <p className="food-item-price">${price}</p>
        </div>
      </div>
    </div>
  );
}
