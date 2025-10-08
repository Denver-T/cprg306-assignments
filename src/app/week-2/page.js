import React from 'react';
import StudentInfo from './student-info';

export default function ShoppingPage() {
  return (
    <main className="min-h-screen bg-slate-900">
      <h1>Shopping list</h1>
      <div>
        <StudentInfo />
      </div>
    </main>
  );
}
