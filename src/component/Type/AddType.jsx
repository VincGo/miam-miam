import React, {useRef} from 'react';
import type from "../../service/type"

const AddType = ({newType}) => {
  const addType = useRef()

  function add(e) {
    e.preventDefault()

    const data = {
      name: addType.current.value
    }

    type.add(data)
      .then(data => {
        newType(data)
        addType.current.value = ""
      })
      .catch(err => console.log(err))
  }

  return (
    <form className="form-input br-20 mb-10 d-flex justify-space-between">
      <input type="text" ref={addType}/>
      <div>
        <span className="separator"/>
        <button onClick={add} className={"mr-25"}>Ajouter</button>
      </div>
    </form>
  );
};

export default AddType;