'use client';
import { useState } from 'react';

//New item object for name, quantity, category
export default function NewItem() {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('Produce');

  //handle sumbit fucntion
  function handleSubmit(event) {
    event.preventDefault();

    //item object
    const item = {
      name: name.trim(),
      quantity: quantity,
      category: category,
    };

    //logging the item object
    console.log('item sumbitted!', item);
    //alert with current state
    alert(
      'Item Added to Cart\n' +
        `Item: ${item.name}\n` +
        `Quantity: ${item.quantity}\n` +
        `Category: ${item.category}`
    );

    //resetting to inital values
    setName('');
    setQuantity(1);
    setCategory('Produce');
  }

  //Quanitity functions
  //increment by 1
  function increment() {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  }

  //decrease quantity by 1
  function decrement() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  //return values
  return (
    <div className="m-4 flex-col items-start rounded-lg border-2 border-rose-300 bg-linear-to-r from-rose-900 to-rose-950 p-4">
      <form onSubmit={handleSubmit}>
        {/* Item Name Field */}
        <section className="font-mono">
          Item:
          <input
            className="rounded-m m-2 border-2 border-black bg-white pl-1 text-black"
            type="text"
            value={name}
            required
            onChange={(event) => setName(event.target.value)}
            placeholder=" e.g. Milk, 4 L 🥛"
          />
        </section>

        {/* Quantity field */}
        <section>
          Quantity: {quantity}
          {/* Increment */}
          <button
            className="m-2 h-8 w-8 rounded-md border-1 bg-slate-900 hover:border-1 hover:border-black hover:bg-white hover:text-black"
            type="button"
            onClick={increment}
          >
            +
          </button>
          {/* Decrement */}
          <button
            className="m-2 h-8 w-8 rounded-md border-1 bg-slate-900 hover:border-1 hover:border-black hover:bg-white hover:text-black"
            type="button"
            onClick={decrement}
          >
            -
          </button>
        </section>
        <text className="text-xs">(Available from 1 - 20)</text>

        {/* Category field */}
        <section className="font-mono">
          Category:
          <select
            className="rounded-m m-2 border-2 border-black bg-white pl-1 text-black"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen foods">Frozen Foods</option>
            <option value="canned goods">Canned Goods</option>
            <option value="dry goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </section>

        {/* Sumbit Button */}
        <button
          className="m-2 mx-auto block rounded-lg border-1 bg-slate-900 px-4 py-2 hover:border-1 hover:border-black hover:bg-white hover:text-black"
          type="sumbit"
        >
          {' '}
          Submit{' '}
        </button>
      </form>
    </div>
  );
}
