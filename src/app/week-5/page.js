'use client';
import { useState } from 'react';
import NewItem from './new-item';

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-900">
      <header className="border-2 border-rose-300 bg-linear-to-r from-rose-900 to-rose-950">
        <h1 className="p-4 text-center font-mono">Week - 5 New Item Page</h1>
      </header>
      <div className="flex justify-center">
        <NewItem />
      </div>
    </main>
  );
}
