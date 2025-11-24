'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUserAuth } from '../../context/AuthContext';

import ItemList from './item-list';
import Header from '../../components/header';
import NewItem from './new-item';
import MealIdeas from './meal-ideas';

import { getItems, addItem } from '../services/shopping-list-service';

export default function Page() {
  const { user } = useUserAuth();
  const router = useRouter();

  // MISSING STATE (added back)
  const [items, setItems] = useState([]);

  const [selectedItemName, setSelectedItemName] = useState('');

  // Redirect to Week 9 login if not logged in
  useEffect(() => {
    if (!user) {
      router.push('/week-9');
    }
  }, [user, router]);

  // Load list from Firestore
  const loadItems = async () => {
    if (!user) return;
    try {
      const list = await getItems(user.uid);
      setItems(list);
    } catch (error) {
      console.error('Failed to load items:', error);
    }
  };

  useEffect(() => {
    loadItems();
  }, [user]);

  if (!user) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-slate-900 text-white">
        <p>You must be logged in to view your shopping list.</p>
      </main>
    );
  }

  async function handleAddItem(newItem) {
    if (!user) return;
    try {
      const id = await addItem(user.uid, newItem);
      const newItemWithId = { id, ...newItem };
      setItems((prev) => [...prev, newItemWithId]);
    } catch (error) {
      console.error('Failed to add item:', error);
    }
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