//item component to display each item from item-list
export default function Item({ name, quantity, category }) {
  return (
    <div className="flex items-center justify-center p-2">
      <li className="w-65 rounded-lg border-2 border-rose-300 bg-linear-to-r from-rose-900 to-rose-950 text-center font-mono">
        <text>{name}</text>
        <text> Quantity: {quantity} </text>
        <text> Category: {category}</text>
      </li>
    </div>
  );
}
