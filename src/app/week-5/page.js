"use client";
import { useState } from "react";
import NewItem from "./new-item";

export default function Page() {
  return (
    <main className="bg-slate-900 min-h-screen">
      <header className="bg-linear-to-r from-rose-900 to-rose-950 border-2 border-rose-300">
        <h1 className="font-mono text-center p-4">
          New Item Page
        </h1>
      </header>
      <div className="flex justify-center">
        <NewItem />
      </div>
    </main>
  );
}