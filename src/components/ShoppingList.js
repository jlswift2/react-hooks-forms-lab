import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems }) {
  //Filter Stuff
  const [selectedCategory, setSelectedCategory] = useState("All");
  let [search, setSearch] = useState("")
  
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All" && search === "") {
      return true;} 
    else if (item.name.includes(search)){
        return item
      } 
    else { return item.category === selectedCategory }});

  //Item Form Stuff
  function onItemFormSubmit(newItem) {
    setItems([...items, newItem])
  }

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={setSearch} search={search} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
