import DropdownMenu from './components/Dropdown';
import Header from './components/header';

export default function Home() {
  const links = [
    { label: '> Shopping List', href: '/week-2' },
    { label: '> Item List', href: '/week-3' },
    { label: '> New Item', href: '/week-4' },
    { label: '> New Item', href: '/week-5' },
    { label: '> Shopping List', href: '/week-6' },
    { label: '> Managing State', href: '/week-7' },
    { label: '> Fetching Data', href: '/week-8' },
    { label: '> Firebase Auth', href: '/week-9' },
  ];

  return (
    <main className="flex min-h-screen flex-col bg-slate-900 text-white">
      <Header />
      <div className="flex flex-grow flex-col items-center justify-center p-6">
        <h1 className="mb-8 text-center font-mono text-2xl font-semibold text-white">
          CPRG 306: Web Development 2 - Assignments
        </h1>

        {/* Dropdowns Container */}
        <div className="flex flex-wrap justify-center gap-4">
          {links.map((link, i) => (
            <DropdownMenu key={i} label={`Week ${i + 2}`} items={[link]} />
          ))}
        </div>
      </div>
    </main>
  );
}
