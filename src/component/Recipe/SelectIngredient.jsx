import React, {useEffect, useState} from 'react';
import crud from "../../service/crud";

const SelectIngredient = () => {
  const [ingredient, setingredient] = useState([])

  useEffect(() => {
    crud.get("ingredients")
      .then(data => setingredient(data))
      .catch(err => console.error(err))
  }, [])

  return (
    <>
      {ingredient && ingredient.map(i =>
        <option value={i.name} key={i.id} name={i["@id"]}/>
      )}
    </>
  );
};

export default SelectIngredient;