import React, { useContext } from 'react';
import { StoreContext } from '../../context/storeContext';
import FoodItem from './FoodItem';
import './foodDisplay.css';

export default function FoodDisplay({ category }) {
  console.log(category);
  const { foodLists } = useContext(StoreContext);

  const filteredFoodLists = category === "All" ? foodLists : foodLists.filter(item => item.name === category);

  return (
    <div className='food-display' id='food-display'>
      <h2>Top Dishes near you</h2>
      <div className="food-display-list">
        {filteredFoodLists.map((item) => (
            <FoodItem
              key={item.id}
              id={item.id}
              name={item.name}
              desc={item.desc}
              price={item.price}
              image={item.image}
            />
          ))}
      </div>
    </div>
  );
}
