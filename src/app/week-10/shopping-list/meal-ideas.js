'use client';

import { useState, useEffect } from 'react';

// fetching function
async function fetchMealIdeas(ingredient) {
  try {
    if (!ingredient) return [];
    const cleanIngredient = encodeURIComponent(ingredient.trim().toLowerCase());
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${cleanIngredient}`;
    console.log('Fetching from URL:', url);

    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error: ${response.status}`);

    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error('Error fetching meals:', error);
    return [];
  }
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  async function loadMealIdeas(ingredient) {
    setIsLoading(true);
    setError(null);
    try {
      const result = await fetchMealIdeas(ingredient);
      setMeals(result);
    } catch (err) {
      console.error('Error in loadMealIdeas:', err);
      setError(`Could not load meal ideas: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (!ingredient) return;
    loadMealIdeas(ingredient);
  }, [ingredient]);

  return (
    <div className="m-4 flex flex-col items-center rounded-lg border-2 border-rose-300 bg-gradient-to-br from-rose-900 to-rose-950 p-6 font-mono text-white shadow-xl transition-all duration-300">
      <h2 className="mb-4 text-2xl font-semibold text-rose-100">Meal Ideas</h2>

      {/* Selected ingredient display */}
      <p className="mb-6 text-sm text-white/70 italic">
        Showing ideas for:{' '}
        <span className="font-semibold text-rose-300">
          {ingredient || 'none selected'}
        </span>
      </p>

      {/* Conditional Rendering */}
      {isLoading && <p className="text-white/70">Loading meal ideas...</p>}
      {error && <p className="text-red-400">{error}</p>}

      {!isLoading && !error && meals.length > 0 && (
        <ul className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
          {meals.map((meal) => (
            <li
              key={meal.idMeal}
              className="flex flex-col items-center rounded-lg border border-white/20 bg-white/10 p-3 transition-all duration-200 hover:bg-white/20"
            >
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="mb-2 h-28 w-28 rounded-md object-cover shadow-md"
              />
              <p className="text-center text-sm text-white">{meal.strMeal}</p>
            </li>
          ))}
        </ul>
      )}

      {!isLoading && !error && meals.length === 0 && ingredient && (
        <p className="text-white/70">No meals found for "{ingredient}".</p>
      )}
    </div>
  );
}
