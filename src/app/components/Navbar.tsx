'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-gray-800 p-6 sticky top-0 left-0 w-full shadow-md z-50">
      <ul className="flex space-x-9">
        <strong className='text-white cursor-default'>Travel Blog</strong>   
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
