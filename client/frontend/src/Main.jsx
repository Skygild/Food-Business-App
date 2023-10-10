import React from "react";
import Buttons from "./Buttons";
import Menu from "./Menu";

const Main = () => {
  return (
    <main>
      <div className="curve"></div>
      <div className="main-header">
        <h1 className="title">The Flash Food</h1>
      </div>
      <div className="announcements">
        <img src="discount1.jpeg" alt="discount-img" />
        <div className="announcements-text-container">
          <h3 className="text">Discount up to 50%</h3>
          <h5 className="text">Promo until October 30th</h5>
        </div>
      </div>
      <div className="scroll-menu">
        <div className="categories">
          <Buttons />
        </div>
      </div>
      <div className="menu">
        <Menu />
      </div>
    </main>
  );
};

export default Main;
