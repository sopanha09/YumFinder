import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white shadow px-10 py-2 flex justify-between items-center">
      <div className="flex items-center gap-x-2">
        <img src="/meal_logo.svg" alt="meal logo" className="" />
        <h1
          className="text-xl bg-clip-text text-transparent animate-gradient font-bold font-rubik"
          style={{
            backgroundImage:
              'linear-gradient(270deg, var(--secondary), var(--primary), var(--secondary))',
            backgroundSize: '200% auto',
          }}
        >
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
    </header>
  );
}
