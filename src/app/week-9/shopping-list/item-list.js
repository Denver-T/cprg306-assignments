import { useState } from 'react';
import Item from './item';

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState('name');

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    if (sortBy === 'category') return a.category.localeCompare(b.category);
    return 0;
  });

  const buttonClass =
    'm-1 rounded-md border border-slate-400 bg-slate-900 px-3 py-1 hover:bg-white hover:text-black hover:border-white transition';

  return (
    <div className="ml-3">
      <h2 className="mb-2 font-mono text-lg">
        Items{' '}
        <span className="text-sm text-gray-400">(sorted by {sortBy})</span>
      </h2>

      <div className="mb-3">
        <button className={buttonClass} onClick={() => setSortBy('name')}>
          Name
        </button>
        <button className={buttonClass} onClick={() => setSortBy('category')}>
          Category
        </button>
      </div>

      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id || `${item.name}-${item.category}`}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
            onSelect={() => onItemSelect(item)}
          />
        ))}
      </ul>
    </div>
  );
}
