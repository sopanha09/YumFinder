import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow">
      <div className="flex justify-between items-center px-4 py-2 max-w-7xl mx-auto">
        <div className="flex items-center gap-x-2">
          <img src="/meal_logo.svg" alt="meal logo" />
          <h1 className="backgroundImage text-xl bg-clip-text text-transparent animate-gradient font-bold font-rubik">
            YumFinder
          </h1>
        </div>

        <div className="flex gap-4 items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'text-[color:var(--secondary)] p-2 hover:text-[color:var(--secondary)]'
                : 'text-gray-800 p-2 hover:text-[color:var(--secondary)]'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/ingredients"
            className={({ isActive }) =>
              isActive
                ? 'text-[color:var(--secondary)] p-2 hover:text-[color:var(--secondary)]'
                : 'text-gray-800 p-2 hover:text-[color:var(--secondary)]'
            }
          >
            Ingredients
          </NavLink>
        </div>
      </div>
    </header>
  );
}
