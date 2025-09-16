import DropdownMenu from './components/Dropdown';

export default function Home() {

      const links = [
      { label: "> Shopping List", href: '/week-2'},
    ]

  return (
    <main>
      <div className="bg-stone-500 min-h-screen">
        <h1 className="bg-linear-to-r from-stone-900 to-stone-950 border-gray-300 border-2 
        font-mono justify-center text-center p-4">
        CPRG 306: Web Development 2 - Assignments
        </h1>
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