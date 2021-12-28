import React, {useRef, useState} from 'react';
import type from "../../service/type";
import DeleteType from "./DeleteType";

const EditType = ({typeData, editType, removeType}) => {
  const [editMode, setEditMode] = useState(false)
  const typeRef = useRef()

  function swapMode() {
    setEditMode(!editMode)
  }

  function edit(e) {
    e.preventDefault()

    const data = {
      name: typeRef.current.value
    }

    type.edit(typeData.id, data)
      .then((data) => editType(data))
      .catch((err) => console.log(err))

    swapMode()
  }

  function deleteType(data) {
    removeType(data)
  }

  return (
    <>
      {editMode &&
      <div className={"d-flex justify-space-between w-100 form-input br-20"}>
        <input type="text" defaultValue={typeData.name} ref={typeRef}/>
        <>
          <button onClick={edit}>Valider</button>
          <button onClick={swapMode} className={"mr-25"}>Retour</button>
        </>
      </div>
      }
      {!editMode &&
      <>
        <span className={"color-blue"}>{typeData.name}</span>
        <div>
          <button onClick={swapMode} className={"btn color-orange"}>Modifier</button>
          <DeleteType typeData={deleteType} typeId={typeData.id}/>
        </div>
      </>
      }
    </>
  );
};

export default EditType;