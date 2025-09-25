import React from "react";
import ItemList from "./item-list";

export default function Page() {
  return (
    <main>
        <header className="bg-linear-to-r from-rose-900 to-rose-950 border-2 border-rose-300">
          <h1 className="font-mono text-center p-4">
          Shopping List
          </h1>
        </header>
      <ItemList />
    </main>
  );
}