"use client"

import DropdownMenu from './components/Dropdown';




export default function Home() {
  return (
    <main>
      <div className="bg-stone-500 min-h-screen">
        <h1 className="bg-linear-to-r from-stone-900 to-stone-950 border-gray-300 border-2 
        font-mono justify-center text-center p-4">
        CPRG306 - Assignments
        </h1>
        <DropdownMenu
        label="Menu"
        items={[
          { label: "Shopping List", href: "/week-2/ShoppingList" },
          { label: "Student Info", href: "/week-2/student-info" },
        ]}
      />
      </div>
    </main>
  );
}         