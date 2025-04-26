import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import LoadingIndicator from '../components/LoadingIndicator';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function MealDetails() {
  const { id } = useParams(); // Get the meal ID from the URL
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMealDetails = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/lookup.php?i=${id}`);
        const data = await response.json();
        if (data.meals) {
          setMeal(data.meals[0]); // Set the first meal from the response
        } else {
          setMeal(null);
        }
      } catch (err) {
        setError('Failed to fetch meal details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchMealDetails();
  }, [id]);

  if (loading) {
    return (
      <MainLayout>
        <LoadingIndicator />
      </MainLayout>
    );
  }

  if (error) {
    return (
      <MainLayout>
        <p className="text-center text-red-500">{error}</p>
      </MainLayout>
    );
  }

  if (!meal) {
    return (
      <MainLayout>
        <p className="text-center text-gray-400">Meal not found.</p>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="max-w-5xl mx-auto p-4 text-white">
        <h1 className="text-3xl font-bold mb-4">{meal.strMeal}</h1>
        <div className="flex flex-col gap-8">
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="w-full max-w-md lg:max-w-xl rounded-lg shadow-lg mx-auto"
          />
          <div className="flex-1">
            <p className="mb-4">
              <strong>Category:</strong> {meal.strCategory || 'N/A'}
            </p>
            <p className="mb-4">
              <strong>Area:</strong> {meal.strArea || 'N/A'}
            </p>
            <p className="mb-4">
              <strong>Tags:</strong> {meal.strTags || 'N/A'}
            </p>
            <h2 className="text-2xl font-bold mb-2">Instructions:</h2>
            <p className="text-gray-300">{meal.strInstructions}</p>
            <h2 className="text-2xl font-bold mt-4 mb-2">Ingredients:</h2>
            <ul className="list-disc list-inside text-gray-300">
              {Array.from({ length: 20 }, (_, i) => i + 1)
                .map((index) => ({
                  ingredient: meal[`strIngredient${index}`],
                  measure: meal[`strMeasure${index}`],
                }))
                .filter((item) => item.ingredient)
                .map((item, index) => (
                  <li key={index}>
                    {item.ingredient} - {item.measure}
                  </li>
                ))}
            </ul>
            <div className="mt-4 flex gap-4">
              {meal.strYoutube && (
                <a
                  href={meal.strYoutube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-700 duration-500 hover:underline text-white px-3 py-2 rounded"
                >
                  Watch on YouTube
                </a>
              )}
              {meal.strSource && (
                <a
                  href={meal.strSource}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-700 duration-500 hover:underline text-white px-3 py-2 rounded"
                >
                  View Original Source
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
