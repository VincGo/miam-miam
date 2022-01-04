import React, {useEffect, useState} from 'react';
import crud from "../../service/crud";

const SelectRecipe = ({day, name, handleChange, defaultValue, dataId, addList}) => {
  const [recipe, setRecipe] = useState([])

  useEffect(() => {
    crud.get("recettes")
      .then(data => setRecipe(data))
      .catch(err => console.log(err))
  }, [])

  function getNameAndValue(e) {
    for (let i = 0; i < recipe.length; i++) {
      if (recipe[i].name === e.target.value) {
        e.target.dataset.id = recipe[i]['@id']
        addList(recipe[i].ingredients)
      }
    }
    handleChange(e)
  }

  return (
    <>
      <label htmlFor={name} className={"color-rose"}>{day}: </label>
      <input type="text" list={"menuRecette"} placeholder={"Choisir une recette"} name={name}
             onChange={getNameAndValue} autoComplete={"off"} data-id={dataId} defaultValue={defaultValue}/>
      <datalist id={"menuRecette"}>
        {recipe && recipe.map(recipe =>
          <option key={recipe.id} value={recipe.name}/>
        )}
      </datalist>
    </>
  );
};

export default SelectRecipe;