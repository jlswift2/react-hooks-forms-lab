import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  //make state for each input
  const[newItem, setNewItem] = useState({ name: "", category: "Produce"})


  function handleChange(e){
    setNewItem({
      ...newItem,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    onItemFormSubmit({
      ...newItem,
      id: uuid(),
    })

    setNewItem(
      { ...newItem,
        name: "", 
      category: "Produce"}
    )
  }



  return (
    <form className="NewItem" onSubmit={handleSubmit} >
      <label>
        Name:
        <input type="text" name="name" onChange={handleChange} />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
