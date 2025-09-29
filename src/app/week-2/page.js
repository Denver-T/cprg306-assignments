import React from "react";
import StudentInfo from "./student-info";

export default function ShoppingPage() {
  return (
    <main className="bg-slate-900 min-h-screen">
      <h1>Shopping list</h1>
      <div>
        <StudentInfo />
      </div>
    </main>
  );
}
