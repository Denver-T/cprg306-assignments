import React from "react";
//item component to display each item from item-list
export default function Item({ name, quantity, category }) {
  return (
    <div className="flex justify-center p-2 rounded-lg border-2 border-rose-300 bg-linear-to-r from-rose-900 to-rose-950">
      <li className="text-center font-mono">
        <text>{name}</text>
        <text> Quantity: {quantity} </text>
        <text> Category: {category}</text>
      </li>
    </div>
  );
}
