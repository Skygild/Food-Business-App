import React from "react";
import { foods } from "./Food";

const Menu = () => {
  return (
    <div>
      {foods.map((food) => {
        return (
          <div key={food.id} id={food.id} className="food-container">
            <h2>{food.title}</h2>
            {food.food_cards.map((food_card) => {
              return (
                <div key={food_card.food_name} className="food">
                  <img src={food_card.img} alt="food-img" />
                  <div className="food-text">
                    <h3>{food_card.food_name}</h3>
                    <h5>{food.food_text}</h5>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
