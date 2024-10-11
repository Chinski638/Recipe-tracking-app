import React from "react";
import RecipeData from "./RecipeData";

function RecipeRow({ recipe, onDelete }) {
  return (
    <tr>
      <td>{recipe.name}</td>
      <td>{recipe.cuisine}</td>
      <td>
        <img src={recipe.photo} alt={recipe.name} style={{ maxWidth: "100px" }} />
      </td>
      <td className="content_td">
        <p>{recipe.ingredients}</p>
      </td>
      <td className="content_td">
        <p>{recipe.preparation}</p>
      </td>
      <td>
        <button name="delete" onClick={onDelete}>
          Delete
        </button>
      </td>
    </tr>
  );
}

function RecipeList({ recipes, deleteRecipe }) {
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe, index) => (
            <RecipeRow
              key={index}
              recipe={recipe}
              onDelete={() => deleteRecipe(index)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
