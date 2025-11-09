import React from 'react';

// Item component — displays each shopping list item
export default function Item({ name, quantity, category, onSelect }) {
  return (
    <div
      className="m-2 flex w-65 cursor-pointer rounded-lg border-2 border-rose-300 bg-gradient-to-r from-rose-900 to-rose-950 p-2 transition-colors hover:border-rose-400 hover:bg-rose-800/30"
      onClick={onSelect}
    >
      <div className="font-mono">
        <p className="font-semibold">{name}</p>
        <p>Quantity: {quantity}</p>
        <p>Category: {category}</p>
      </div>
    </div>
  );
}
