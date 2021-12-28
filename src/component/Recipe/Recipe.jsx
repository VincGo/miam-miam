import React, {useEffect, useState} from 'react';
import Title from "../Title/Title";
import crud from "../../service/crud";
import DeleteRecipe from "./DeleteRecipe";

const Recipe = () => {
  const [recipe, setRecipe] = useState([])

  useEffect(() => {
    crud.get("recettes")
      .then(data => setRecipe(data))
      .catch(err => console.error(err))
  }, [])

  function deleteRecipe(id) {
    const arr = recipe.filter(recipe => recipe.id !== id)
    setRecipe(arr)
  }

  return (
    <div>
      <Title title={"Recette"} titleColor={"color-orange"} titleBg={"bg-orange"}/>
      <div className={"form-container br-5 p-10"}>
        <a href={"recette/ajout"}>Ajouter une recette</a>
        {recipe && recipe.map(r =>
          <li key={r.id} className={"color-orange"}>
            <a href={`recette/${r.id}`} className={"color-orange"}>
              {r.name}
            </a>
            <a href={`recette/edit/${r.id}`} className={"color-blue"}>
              modifier
            </a>
            <DeleteRecipe recipeId={r.id} recipeData={deleteRecipe}/>
          </li>
        )}
      </div>
    </div>
  );
};

export default Recipe;