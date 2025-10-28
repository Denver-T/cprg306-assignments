'use client';
import ItemList from './item-list';
import Header from '../components/header';
import NewItem from './new-item';
import ItemData from './items.json';
import MealIdeas from './meal-ideas';
import { useState } from 'react';

export default function Page() {
  const [items, setItems] = useState(ItemData);
  const [selectedItemName, setSelectedItemName] = useState('');

  function handleAddItem(newItem) {
    setItems((prevItems) => {
      return [...prevItems, newItem];
    });
  }

  function handleItemSelect(item) {
    let itemName = item.name.toLowerCase().trim();
    itemName = itemName.split(',')[0];
    itemName = itemName.replace(/[^\p{L}\s]/gu, '').trim();
    setSelectedItemName(itemName);
  }

  return (
    <main className="min-h-screen bg-slate-900">
      <Header />
      <div className="flex flex-col gap-8 md:flex-row">
        <div className="flex-1">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="flex-1">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
