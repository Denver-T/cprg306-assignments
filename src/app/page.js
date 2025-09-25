import DropdownMenu from './components/Dropdown';

export default function Home() {

      const links = [
      { label: "> Shopping List", href: '/week-2'},
    ]

  return (
    <main>
      <div className="bg-slate-900 min-h-screen">
        <header className="bg-linear-to-r from-rose-900 to-rose-950 border-2 border-rose-300">
          <h1 className="text-center p-4">
          CPRG 306: Web Development 2 - Assignments
        </h1>
        </header>
        <div className='justify-center text-center'>
          <DropdownMenu
            label="Week 2"
            items={links}
          />
      </div>
      </div>
    </main>
  );
}         