import React from "react";

const Buttons = () => {
  const direct = (id) => {
    const category = document.getElementById(id);
    category.scrollIntoView({ behavior: "smooth" });
  };

  const buttons = [
    { key: "b-best-sellers", id: "best-sellers", title: "Best Sellers" },
    { key: "b-burgers", id: "burgers", title: "Burgers" },
    { key: "b-chickens", id: "chickens", title: "Chickens" },
    { key: "b-fries", id: "fries", title: "Fries" },
    { key: "b-beverages", id: "beverages", title: "Beverages" },
  ];

  return (
    <div>
      {buttons.map((button) => {
        return (
          <button onClick={() => direct(button.id)} key={button.key} id={button.key}>
            {button.title}
          </button>
        );
      })}
    </div>
  );
};

export default Buttons;
