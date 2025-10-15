'use client'
import ItemList from "./item-list";
import Header from "../components/header";

export default function Page() {
  return (
  <main>
    <Header />
    <h1>Shopping list</h1>
    <ItemList />
  </main>
  );
}