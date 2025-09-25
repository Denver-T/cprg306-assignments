export default function Item(ItemList) {
  return (
    <div>
      <h1>{ItemList.name}</h1>
      <p>Quantity: {ItemList.quantity}</p>
      <p>Category: {ItemList.category}</p>
    </div>
  );
}