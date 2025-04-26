import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import { MealCard } from '../components/MealCard';
import LoadingIndicator from '../components/LoadingIndicator';

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
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4 text-white">
          Meals with "{ingredient}"
        </h2>
        {error && <p className="text-center py-8 text-red-500">{error}</p>}
        {loading && <LoadingIndicator />}
        {!loading && meals.length === 0 && !error && (
          <p className="text-center py-8 text-gray-400">No meals found</p>
        )}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {meals.map((meal) => (
            <MealCard key={meal.idMeal} meals={meal} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
