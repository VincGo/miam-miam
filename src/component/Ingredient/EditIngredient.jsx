import React, {useEffect, useRef, useState} from 'react';
import ingredient from '../../service/ingredient';
import type from "../../service/type";
import DeleteIngredient from "./DeleteIngredient";

const EditIngredient = ({ingredientData, editIngredient, removeIngredient}) => {
  const [editMode, setEditMode] = useState(false)
  const [typeArr, setTypeArr] = useState([])
  const ingredientRef = useRef()
  const typeRef = useRef()
  const types = ingredientData.type.map(t => t.name)

  useEffect(() => [
    type.get()
      .then(data => setTypeArr(data))
      .catch(err => console.log(err))
  ], [])

  function swapMode() {
    setEditMode(!editMode)
  }

  function edit(e) {
    e.preventDefault()

    const data = {
      name: ingredientRef.current.value,
      type: [typeRef.current.value]
    }

    ingredient.edit(ingredientData.id, data)
      .then((data) => editIngredient(data))
      .catch((err) => console.log(err))

    swapMode()
  }

  function ingredientDelete(data) {
    removeIngredient(data)
  }

  return (
    <>
      {editMode &&
      <div className={"d-flex justify-space-between w-100 form-input br-20"}>
        <input type="text" defaultValue={ingredientData.name} ref={ingredientRef}/>
        <select name="type" id="type" ref={typeRef}>
          {typeArr && typeArr.map(t =>
            <option value={t["@id"]} key={t.id}>
              {t.name}
            </option>
          )}
        </select>
        <>
          <button onClick={edit}>Valider</button>
          <button onClick={swapMode} className={"mr-25"}>Retour</button>
        </>
      </div>
      }
      {!editMode &&
      <>
        <span className={"color-blue"}>{ingredientData.name} - {types}</span>
        <div>
          <button onClick={swapMode} className={"btn color-orange"}>Modifier</button>
          <DeleteIngredient ingredientId={ingredientData.id} ingredientDelete={ingredientDelete}/>
        </div>
      </>
      }
    </>
  );
};

export default EditIngredient;