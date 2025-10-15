"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
  ];

  return (
    <header className="border-2 border-rose-300 bg-linear-to-r from-rose-900 to-rose-950">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        {/* Logo or Title */}
        <h1 className="text-2xl font-bold">
          <Link href="/">CPRG 306: Web Development 2 - Assignments</Link>
        </h1>

        {/* Navigation */}
        <nav className="flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-blue-400 transition ${
                pathname === link.href ? "text-blue-400 font-semibold" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}