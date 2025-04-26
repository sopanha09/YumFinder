import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import { Card } from '../components/Card';
import LoadingIndicator from '../components/LoadingIndicator';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function Ingredients() {
  const [ingredients, setIngredients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchIngredients = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/list.php?i=list`);
        const data = await response.json();
        setIngredients(data.meals || []);
      } catch (error) {
        console.error('Error fetching ingredients:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchIngredients();
  }, []);

  const handleIngredientClick = (ingredient) => {
    navigate(`/ingredients/${ingredient}`);
  };
  return (
    <MainLayout>
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4 text-white">Ingradients</h2>
        {error && <p className="text-center py-8">{error}</p>}
        {loading && <LoadingIndicator />}
        {!loading && Ingredients.length === 0 && !error && (
          <p className="text-center py-8 text-gray-400">No ingredient found</p>
        )}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {ingredients.map((ingredient) => (
            <Link
              key={ingredient.strIngredient}
              to={`/ingredient/${ingredient.strIngredient}`}
            >
              <Card>
                <h2>{ingredient.strIngredient}</h2>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
