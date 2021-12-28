import React, {useEffect, useRef, useState} from 'react';
import ingredient from '../../service/ingredient';
import type from "../../service/type";

const AddIngredient = ({newIngredient}) => {
  const addIngredient = useRef()
  const addType = useRef()
  const [types, setTypes] = useState([])

  useEffect(() => {
    type.get()
      .then(data => setTypes(data))
      .catch(err => console.log(err))
  }, [])

  function add(e) {
    e.preventDefault()
    const data = {
      name: addIngredient.current.value,
      type: [addType.current.value]
    }

    ingredient.add(data)
      .then((data) => {
        newIngredient(data)
        addIngredient.current.value = ""
      })
      .catch((err) => console.log(err))
  }

  return (
    <form className="form-input br-20 mb-10 d-flex justify-space-between">
      <input type="text" ref={addIngredient}/>
      <select name="type" id="type" ref={addType}>
        {types && types.map(t =>
          <option key={t.id} value={t['@id']}>{t.name}</option>
        )}
      </select>
      <div>
        <span className="separator"/>
        <button onClick={add} className={"mr-25"}>Ajouter</button>
      </div>
    </form>
  );
};

export default AddIngredient;