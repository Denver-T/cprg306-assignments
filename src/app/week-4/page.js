"use client";
import { useState } from "react";
import NewItem from "./new-item";

export default function Page() {
  return (
    <main>
      <header>
        <h1>New Item Page</h1>
      </header>
      <div>
        <h2>
          Add or Remove Item
        </h2>
        //increment button
        <button onCLick={() => {
          increment();
          }}></button>
        //decrement button
        <button onClick={() => {
          decrement();
        }}></button>
      </div>
    </main>
  );
}