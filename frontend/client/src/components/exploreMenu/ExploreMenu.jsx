import React, { useState } from 'react';
import './exploreMenu.css';
import menuLists from '../../assets/menulist.js';

export default function ExploreMenu({ setCategory }) {
  const [clickedItem, setClickedItem] = useState(null);

  const handleClick = (item) => {
    console.log(item.name);
    const newCategory = clickedItem === item.name ? "All" : item.name;
    setCategory(newCategory);
    setClickedItem(newCategory === "All" ? null : item.name);
  };

  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our Menu</h1>
      <p>Choose from a diverse menu featuring a delectable array of dishes</p>
      <div className="explore-menu-list">
        {menuLists.map((item, index) => (
          <div 
            key={index} 
            onClick={() => handleClick(item)} 
            className={`list-box ${clickedItem === item.name ? 'clicked' : ''}`}
          >
            <img src={item.image} alt="" />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
