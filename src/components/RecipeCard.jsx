import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.title} className="recipe-image" />
      <div className="recipe-content">
        <h3>{recipe.title}</h3>
        <p>{recipe.description}</p>
        <Link to={`/recipe/${recipe.id}`} className="view-details">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
