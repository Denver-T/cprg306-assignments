//item component to display each item from item-list
export default function Item({name, quantity, category}) {
  return (
    <div className="flex items-center justify-center p-2">
      <li className="font-mono w-65 bg-linear-to-r from-rose-900 to-rose-950 border-2 border-rose-300 text-center rounded-lg">
        <text>{name}</text>
        <text> Quantity: {quantity} </text>
        <text> Category: {category}</text>
      </li>
    </div>
  );
}