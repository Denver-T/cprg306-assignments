"use client";
import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);
  
  //increment quantity by 1
  function increment() {
    setQuantity(q => q + 1);
  }

  //decrease quantity by 1
  function decrement() {
    setQuantity(q => q -1);
  }
}