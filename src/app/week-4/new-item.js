"use client";
import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);
  
function increment() {
  if(quantity < 20) {
      setQuantity(quantity + 1);
    }
  }


  //decrease quantity by 1
  function decrement() {
    if(quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  //function to reset counter to orignal value
  //   function resetCounter() {
  //   setQuantity(quantity = useState);
  // }

  return (
    <div className="m-2 w-65 bg-linear-to-r from-rose-900 to-rose-950 border-2 border-rose-300 text-center rounded-lg">
    <h1 className="font-mono">Add or Remove Item</h1>
    <h2 className="font-mono m-2"> Quantity: {quantity}</h2>

    <button className="m-2 py-2 px-4 bg-slate-900 rounded-lg border-1
    hover:bg-white hover:text-black hover:border-1 hover:border-black"
    onClick={() => {
      increment();
    }}>+1</button>
  
    <button className="m-2 py-2 px-4 bg-slate-900 rounded-lg border-1
    hover:bg-white hover:text-black hover:border-1 hover:border-black"
    onClick={() => {
      decrement();
    }}>-1</button> 
    </div>
  );
}