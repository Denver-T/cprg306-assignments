'use client';
import ItemList from './item-list';
import Header from '../components/header';
import NewItem from './new-item';
import ItemData from './items.json';
import { useState } from 'react';

export default function Page() {
  const [items, setItems] = useState(ItemData);

  function handleAddItem(newItem) {
    setItems((prevItems) => {
      return [...prevItems, newItem];
    });
  }

  return (
    <main className="min-h-screen bg-slate-900">
      <Header />
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </main>
  );
}
