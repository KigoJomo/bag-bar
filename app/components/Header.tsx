'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

const pages = [
  {
    name: 'all products',
    path: '/products',
  },
  {
    name: 'new arrivals',
    path: '/arrivals',
  },
  {
    name: 'collections',
    path: '/collections',
  },
];

const menuItems = [
  {
    name: 'search',
  },
  {
    name: 'cart',
  },
  {
    name: 'account',
  },
];

const Header: React.FC = () => {
  const pathname = usePathname();
  const [menuState, setMenuState] = useState({
    dropdownOpen: false,
    searchOpen: false,
    cartOpen: false,
    accountOpen: false,
  });

  return (
    <header className="w-screen sticky top-0 z-20 px-4 md:px-12 py-4 md:py-4 flex items-center justify-between">
      <nav className="w-full flex items-center justify-between">
        <div className="page-links flex items-center gap-6">
          {pages.map((page, index) => (
            <Link
              key={index}
              href={page.path}
              className={`text-sm uppercase border-b py-2 hover:opacity-100 hover:border-foreground ${
                pathname === page.path
                  ? 'opacity-100 border-foreground'
                  : 'opacity-60 border-transparent'
              } transition-all duration-300`}>
              {page.name}
            </Link>
          ))}
        </div>

        <Link href={'/'}>
          <p className="abril">bag bar</p>
        </Link>

        <div className="menu flex items-center gap-6">
          
        </div>
      </nav>
    </header>
  );
};

export default Header;
