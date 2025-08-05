//  src/app/components/Navbar.tsx
'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (open) setOpen(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [open]);

  return (
    <nav className="fixed top-6 right-6 z-50">
      <button
        onClick={() => setOpen(!open)}
        className="relative w-10 h-10 flex flex-col justify-center items-center bg-gray-900 text-white rounded-full shadow-md group"
      >
        <span
          className={`absolute w-5 h-0.5 bg-white transition-transform duration-300 ease-in-out ${
            open ? 'rotate-45' : '-translate-y-2'
          }`}
        />
        <span
          className={`absolute w-5 h-0.5 bg-white transition-opacity duration-200 ease-in-out ${
            open ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <span
          className={`absolute w-5 h-0.5 bg-white transition-transform duration-300 ease-in-out ${
            open ? '-rotate-45' : 'translate-y-2'
          }`}
        />
      </button>

      {open && (
        <div className="absolute right-0 mt-3 bg-gray-900 text-white rounded-lg shadow-lg p-5 space-y-3 w-48 md:w-56">
          <a href="#experience" className="block hover:bg-gray-800 px-3 py-1 rounded text-sm md:text-base transition">Experience</a>
          <a href="#projects" className="block hover:bg-gray-800 px-3 py-1 rounded text-sm md:text-base transition">Projects</a>
          <a href="#contact" className="block hover:bg-gray-800 px-3 py-1 rounded text-sm md:text-base transition">Contact</a>
        </div>
      )}
    </nav>
  );
}
