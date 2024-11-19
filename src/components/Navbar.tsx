'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import links from '../constants/links.json';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-gray-800 p-6 sticky flex top-0 left-0 w-full shadow-md z-50">
       <strong className="text-white cursor-default mr-8">Travel Blog</strong>
      <ul className="flex space-x-9">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`text-white hover:text-gray-300 transition-colors duration-200 ${
                pathname === link.href ? 'underline' : 'no-underline'
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
