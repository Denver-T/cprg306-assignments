import DropdownMenu from './components/Dropdown';

export default function Home() {
//constants for links to seperate pages can be added through reusable drop down menu
      const link1 = [
      { label: "> Shopping List", href: '/week-2'},
    ]

    const link2 = [
      { label: "> Item List", href: "/week-3"},
    ]

    const link3 = [
      { label: "> New Item", href: "/week-4"}
    ]

    const link4 = [
      { label: "> New Item", href: "/week-5"}
    ]

  return (
    <main className="bg-slate-900 min-h-screen">
        <header className="bg-linear-to-r from-rose-900 to-rose-950 border-2 border-rose-300">
          <h1 className="font-mono text-center p-4">
          CPRG 306: Web Development 2 - Assignments
        </h1>
        </header>
        <div className='text-center'>
          <DropdownMenu
            label="Week 2"
            items={link1}
          />
          <DropdownMenu
          label="Week 3"
          items={link2}
          />
          <DropdownMenu
            label="Week 4"
            items={link3}
          />
          <DropdownMenu
          label="Week 5"
          items={link4}
          />
      </div>
    </main>
  );
}         