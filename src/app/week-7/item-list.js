import { useState } from 'react';
import Item from './item';

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState('name');
  //creatig a new sorted array
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div>
      <div>
        <h2 className="font-mono">Items (currently sorted by {sortBy})</h2>
        <button
          className="m-1 rounded-md border-1 bg-slate-900 p-1 hover:border-1 hover:border-white hover:bg-white hover:text-black"
          type="button"
          onClick={() => setSortBy('name')}
        >
          Name
        </button>
        <button
          className="m-1 rounded-md border-1 bg-slate-900 p-1 hover:border-1 hover:border-black hover:bg-white hover:text-black"
          type="button"
          onClick={() => setSortBy('category')}
        >
          Category
        </button>
      </div>
      <ul>
        {sortedItems.map((item, index) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
}
