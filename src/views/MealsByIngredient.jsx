import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import { MealCard } from '../components/MealCard';
import LoadingIndicator from '../components/LoadingIndicator';
import Banner from '../components/Banner';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function MealsByIngredient() {
  const { ingredient } = useParams();
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch(
          `${API_BASE_URL}/filter.php?i=${ingredient}`
        );

        console.log('first', response);
        const data = await response.json();
        console.log('second', data);
        if (data.meals) {
          setMeals(data.meals);
        } else {
          setMeals([]);
        }
      } catch (err) {
        setError('Failed to fetch meals. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchMeals();
  }, [ingredient]);

  return (
    <MainLayout>
      <div>
        <Banner
          title={`Meals with "${ingredient}"`}
          subtitle="Click on a meal to see more details."
        />

        {error && <p className="text-center py-8 text-red-500">{error}</p>}
        {loading && <LoadingIndicator />}
        {!loading && meals.length === 0 && !error && (
          <p className="text-center py-8 text-gray-400">No meals found</p>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto gap-8 px-4 py-10">
          {meals.map((meal) => (
            <MealCard key={meal.idMeal} meals={meal} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
