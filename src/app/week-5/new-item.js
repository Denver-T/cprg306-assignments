'use client';
import { useState } from 'react';

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  function increment() {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  }

  //decrease quantity by 1
  function decrement() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  //function to reset counter to orignal value
  //   function resetCounter() {
  //   setQuantity(quantity = useState);
  // }

  return (
    <div className="m-2 w-65 rounded-lg border-2 border-rose-300 bg-linear-to-r from-rose-900 to-rose-950 text-center">
      <h2 className="font-mono">Add or Remove Item</h2>
      <h3 className="m-2 font-mono"> Quantity: {quantity}</h3>
      <text className="m-2 font-mono">Available from 1 - 20</text>

      <button
        className="m-2 rounded-lg border-1 bg-slate-900 px-4 py-2 hover:border-1 hover:border-black hover:bg-white hover:text-black"
        onClick={() => {
          increment();
        }}
      >
        +1
      </button>

      <button
        className="m-2 rounded-lg border-1 bg-slate-900 px-4 py-2 hover:border-1 hover:border-black hover:bg-white hover:text-black"
        onClick={() => {
          decrement();
        }}
      >
        -1
      </button>
    </div>
  );
}
