import React, { useState } from "react";

function Item({ name, category }) {
  const [addItem, setAddItem] = useState(false);
  const inCart = addItem? "in-cart" : "";

  function cartHandler(e){
    setAddItem(!addItem)
    const btnText = addItem ? "Add to Cart" : "Remove from Cart";
    e.target.textContent = btnText;
  }
  return (
    <li className={inCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={cartHandler}>Add to Cart</button>
    </li>
  );
}

export default Item;
