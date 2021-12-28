import React from 'react';
import crud from "../../service/crud";

const DeleteRecipe = ({recipeId, recipeData}) => {
  function remove() {
    crud.delete("recettes", recipeId)
      .then(recipeData(recipeId))
      .catch((err) => console.log(err))
  }

  return (
    <button onClick={remove} className={"btn color-rose"}>
      Supprimer
    </button>
  );
};

export default DeleteRecipe;