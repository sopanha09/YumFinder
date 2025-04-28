import React from 'react';
import { useEffect, useState } from 'react';
import { MealCard } from '../components/MealCard';
import SearchForm from '../components/SearchForm';
import MainLayout from '../layout/MainLayout';
import LoadingIndicator from '../components/LoadingIndicator';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function Home() {
  const [search, setSearch] = useState('');
  const [meals, setMeals] = useState([]);
  const [heading, setHeading] = useState('Random Meals');
  const [loading, setLoading] = useState(false);

  const handleSearch = (query) => {
    console.log('search: ', query);

    const url = `${API_BASE_URL}/search.php?s=${query}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (query.trim() === '') {
          setHeading('Random Meals');
        } else {
          setHeading(`Search results for "${query}"`);
        }
        console.log('data: ', data);
        // handle the data
        if (data.meals) {
          setMeals(data.meals.slice(0, 8));
        } else {
          setMeals([]);
        }
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  };
  useEffect(() => {
    handleSearch('');
  }, []);

  return (
    <MainLayout>
      <div>
        <SearchForm
          search={search}
          setSearch={setSearch}
          onSearch={handleSearch}
        />
      </div>

      <div className="my-10">
        <h2 className="text-2xl font-semibold text-gray-700 max-w-7xl mx-auto px-4">
          {heading}
        </h2>
        {loading ? (
          <LoadingIndicator />
        ) : meals.length === 0 ? (
          <p className="text-center text-white">No meals found</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 max-w-7xl mx-auto gap-8">
            {meals.map((meal) => (
              <MealCard key={meal.idMeal} meals={meal} />
            ))}
          </div>
        )}
      </div>
    </MainLayout>
  );
}
