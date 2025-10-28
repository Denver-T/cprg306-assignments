'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function DropdownMenu({ label, items }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative m-2 inline-block text-center">
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="min-w-[180px] rounded-lg border-2 border-rose-300 bg-gradient-to-r from-rose-900 to-rose-950 px-6 py-2 font-mono text-white shadow-md transition-colors duration-300 hover:border-rose-400 hover:from-rose-800 hover:to-rose-900"
      >
        {label}
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute left-1/2 z-20 mt-2 w-48 -translate-x-1/2 rounded-lg border border-rose-300 bg-slate-800/95 shadow-lg backdrop-blur-md">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-2 font-mono text-sm text-white transition hover:bg-rose-900/60 hover:text-rose-200"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
