import React from 'react';
import ingredient from '../../service/ingredient';

const DeleteIngredient = ({ingredientId, ingredientDelete}) => {

  function remove() {
    ingredient.delete(ingredientId)
      .then(ingredientDelete(ingredientId))
      .catch((err) => console.log(err))
  }

  return (
    <button onClick={remove} className={"btn color-rose"}>
      Supprimer
    </button>
  );
};

export default DeleteIngredient;