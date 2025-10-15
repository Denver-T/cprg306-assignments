
import { useState } from "react";
import Item from "./item";
import items from './items.json' with { type: 'json'};


export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");
  //creatig a new sorted array
  const sortedItems = [...items].sort((a,b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div>
      <div>     
        <h2>Items (sorted by {sortBy})</h2>
        <button onClick={() => setSortBy("name")}>Name</button>
        <button onClick={() => setSortBy("category")}>Category</button>
      </div>
    <ul>
      {sortedItems.map((item, index) => (     
        <Item
        key={index}
        name={item.name}
        quantity={item.quantity}
        category={item.category}
        />
      ))}
    </ul>
  </div>
  );
}