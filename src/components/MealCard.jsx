import { Link } from 'react-router-dom';

export function MealCard({ meals }) {
  return (
    <Link to={`/meal/${meals.idMeal}`}>
      <div className="flex flex-col h-full max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <img
          className="w-full"
          src={meals.strMealThumb}
          alt={meals.strMeal || 'Card image'}
        />
        <div className="flex-1 px-6 py-4 flex flex-col">
          <div className="font-bold text-xl mb-2 text-amber-300">
            {meals.strMeal}
          </div>
          {/* <p className="text-gray-700 text-base mt-auto">
            {meals.strInstructions?.slice(0, 100) ||
              'No description available.'}
          </p> */}
          <a
            href={meals.strYoutube}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center mt-4 bg-blue-500 hover:bg-blue-700 duration-500 hover:underline text-white px-3 py-2 rounded"
          >
            Watch on YouTube
          </a>
        </div>
      </div>
    </Link>
  );
}
