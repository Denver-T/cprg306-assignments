'use client';
import ItemList from './item-list';
import Header from '../components/header';

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-900">
      <Header />
      <div className="m-2 flex justify-center p-2 text-wrap">
        <h1 className="font-mono text-3xl font-bold">Shopping list</h1>
      </div>
      <div className="m-2 flex justify-center p-2">
        <ItemList />
      </div>
    </main>
  );
}
