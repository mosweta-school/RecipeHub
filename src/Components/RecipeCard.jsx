import React from 'react'
import { useState } from 'react';

function RecipeCard({ recipe }) {
    const [likes, setLikes] = useState(0);
    function handleLike(){
        setLikes(likes + 1);
    }
    return (
        <div className="recipe-card">
            <h2>{recipe.title}</h2>
            
            <h3>Ingredients:</h3>
            <ul>
                {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>

            <h3>Instructions:</h3>
            <ol>
                {recipe.instructions.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
            </ol>
            <button
            onClick={handleLike}>Like</button>
            <p>Likes: {likes}</p>
        </div>
    )
}

export default RecipeCard;
