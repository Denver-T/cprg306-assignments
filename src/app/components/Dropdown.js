"use client"
import { useState } from "react";
import Link from "next/link";

export default function DropdownMenu({ label, items }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block justify-centertext-center p-2">
      <button
        onClick={() => setOpen(!open)}
        className='px-15 py-2 bg-linear-to-r from-rose-900 to-rose-950 border-2 border-rose-300
          hover:bg-black font-mono justify-center text-center'
      >
        {label}
      </button>


      {open && (
        <div className="absolute bg-stone-300 border shadow-lg">
            {items.map((item, idx) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-2 font-mono text-stone-500 hover:bg-gray-100"
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
