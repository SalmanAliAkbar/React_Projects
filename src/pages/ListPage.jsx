import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecipeCard from '../components/RecipeCard';

const ListPage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/recipes')
      .then(response => setRecipes(response.data.recipes))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="list-page">
      <div className="recipe-grid">
        {recipes.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default ListPage;
