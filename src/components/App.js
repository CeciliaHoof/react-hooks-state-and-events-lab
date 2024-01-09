import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [darkToggle, setToggle] = useState(false);
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  
  const appClass = darkToggle ? "App dark" : "App light"
  
  function toggleHandler(){
    setToggle(!darkToggle)
  }
  
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleHandler}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
