import React, { useEffect, useRef, useState } from 'react';

export default function SearchForm({ search, setSearch, onSearch }) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(search);
  };

  return (
    <div
      className="bg-animate-gradient animate-gradient text-center text-white flex flex-col gap-y-6 p-16"
      style={{
        backgroundImage:
          'linear-gradient(270deg, var(--secondary), var(--primary), var(--secondary))',
        backgroundSize: '200% auto',
      }}
    >
      <div>
        <h1 className="text-4xl  font-bold mb-2">Discover Delicious Meals</h1>
        <p>Explore our carefully curated selection of mouth-watering dishes</p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-center gap-28 px-4 py-1 mx-auto bg-white rounded-full shadow-lg max-w-md w-full"
      >
        <div className="flex  gap-x-2">
          <img src="/search.svg" alt="" className="w-5 text-gray-500" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-md p-2 rounded text-gray-500 focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="bg-secondary py-1 px-8 rounded-full text-white"
        >
          Search
        </button>
      </form>
    </div>
  );
}
