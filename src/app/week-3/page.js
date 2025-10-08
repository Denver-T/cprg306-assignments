import React from 'react';
import ItemList from './item-list';

export default function Page() {
  return (
    <main>
      <header className="border-2 border-rose-300 bg-linear-to-r from-rose-900 to-rose-950">
        <h1 className="p-4 text-center font-mono">Shopping List</h1>
      </header>
      <ItemList />
    </main>
  );
}
