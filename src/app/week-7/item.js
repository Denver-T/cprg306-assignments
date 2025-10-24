import React from 'react';
//item component to display each item from item-list
export default function Item({ name, quantity, category }) {
  return (
    <div className="m-2 flex w-65 rounded-lg border-2 border-rose-300 bg-linear-to-r from-rose-900 to-rose-950 p-2">
      <ul className="font-mono">
        <li>{name}</li>
        <li> Quantity: {quantity} </li>
        <li> Category: {category}</li>
      </ul>
    </div>
  );
}
