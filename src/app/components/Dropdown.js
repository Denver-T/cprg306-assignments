import { useState } from "react";
import Link from "next/link";

export default function DropdownMenu({ label, items }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block justify-center text-center">
      <button
        onClick={() => setOpen(!open)}
        className='px-10 py-2 bg-linear-to-r from-stone-900 to-stone-950 border-gray-300 border-2 
          hover:bg-black font-mono justify-center text-center p-2'
      >
        {label}
      </button>


      {open && (
        <div className="absolute w-48 bg-stone-300 border shadow-lg">
          <ul className="py-1">
            {items.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.href}
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
