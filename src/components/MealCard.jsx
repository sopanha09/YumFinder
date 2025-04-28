import { Link } from 'react-router-dom';

export function MealCard({ meals }) {
  return (
    <div className="flex flex-col h-full max-w-sm rounded-b-lg overflow-hidden shadow-2xl">
      <Link to={`/meal/${meals.idMeal}`}>
        <img
          className="w-full max-h-40 rounded-t-lg object-cover"
          src={meals.strMealThumb}
          alt={meals.strMeal || 'Card image'}
        />
        <div className="flex-1 px-6 py-4 flex flex-col">
          <h1 className="font-semibold text-xl mb-1 text-gray-700">
            {meals.strMeal?.length > 38
              ? `${meals.strMeal.slice(0, 38)}...`
              : meals.strMeal}
          </h1>
          <p className="text-gray-500 text-base mt-auto">
            {meals.strInstructions?.slice(0, 58) || 'No description available.'}
            {meals.strInstructions?.length > 58 ? '...' : ''}
          </p>
        </div>
      </Link>
      <div className="text-center mb-5 px-6 mt-auto w-full">
        <a
          href={meals.strYoutube}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-primary hover:bg-primary/30 duration-500 text-white px-3 py-1 text-base  w-full block"
        >
          Watch on YouTube
        </a>
      </div>
    </div>
  );
}
