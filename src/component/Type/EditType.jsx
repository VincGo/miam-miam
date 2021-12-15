import React, {useRef, useState} from 'react';
import type from "../../service/type";

const EditType = ({typeData, editType}) => {
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

    return (
        <>
            {editMode &&
                <>
                    <input type="text" defaultValue={typeData.name} ref={typeRef}/>
                    <button onClick={edit}>Valider</button>
                    <button onClick={swapMode}>Retour</button>
                </>
            }
            {!editMode &&
                <>
                    {typeData.name}
                    <button onClick={swapMode}>Modifier</button>
                </>
            }
        </>
    );
};

export default EditType;