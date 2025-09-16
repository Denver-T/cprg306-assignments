import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div className="bg-stone-500 min-h-screen">
        <h1 className="bg-linear-to-r from-stone-900 to-stone-950 border-gray-300 border-2 font-mono justify-center text-center p-4">
        CPRG306 - Assignments
        </h1>
        <ol>
          <li className="font-mono">
            <Link href="/week-2"> &gt; Week-2 Assingment</Link>
          </li>
        </ol>
      </div>
    </main>
  );
}         