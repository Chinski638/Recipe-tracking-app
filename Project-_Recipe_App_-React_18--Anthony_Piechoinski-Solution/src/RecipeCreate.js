import React, { useState } from "react";

function RecipeCreate({ onCreateRecipe }) {
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: ""
  };

  const [formData, setFormData] = useState({ ...initialFormState });

  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreateRecipe(formData); 
    setFormData({ ...initialFormState });  
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                name="name"
                type="text"
                placeholder="Recipe Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </td>
            <td>
              <input
                name="cuisine"
                type="text"
                placeholder="Cuisine"
                value={formData.cuisine}
                onChange={handleChange}
                required
              />
            </td>
            <td>
              <input
                name="photo"
                type="url"
                placeholder="URL of the Recipe Photo"
                value={formData.photo}
                onChange={handleChange}
                required
              />
            </td>
            <td>
              <textarea
                name="ingredients"
                placeholder="Ingredients"
                value={formData.ingredients}
                onChange={handleChange}
                required
              />
            </td>
            <td>
              <textarea
                name="preparation"
                placeholder="Preparation Steps"
                value={formData.preparation}
                onChange={handleChange}
                required
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
