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
    <div className="backgroundImage bg-animate-gradient animate-gradient text-center text-white flex flex-col gap-y-6 p-16">
      <div>
        <h1 className="md:text-4xl text-3xl  font-semibold mb-2">
          Discover Delicious Meals
        </h1>
        <p>Explore our carefully curated selection of mouth-watering dishes</p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-center md:gap-28 gap-4 px-4 py-1 mx-auto bg-white rounded-full shadow-lg md:max-w-md max-w-3xs
 w-full"
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
          className="bg-secondary py-1 md:px-8 px-4 rounded-full text-white"
        >
          Search
        </button>
      </form>
    </div>
  );
}
