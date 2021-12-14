import React, {useEffect, useRef, useState} from 'react';
import ingredient from '../../service/ingredient';
import type from "../../service/type";

const EditIngredient = ({ingredientData, editIngredient}) => {
    const [editMode, setEditMode] = useState(false)
    const [typeArr, setTypeArr] = useState([])
    const ingredientRef = useRef()
    const typeRef = useRef()
    const types = ingredientData.type.map(t => t.name)

    useEffect(() => [
        type.get()
            .then(data => setTypeArr(data))
            .catch(err =>  console.log(err))
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

    return (
        <>
            {editMode &&
                <>
                    <input type="text" defaultValue={ingredientData.name} ref={ingredientRef}/>
                    <select name="type" id="type" ref={typeRef}>
                        {typeArr && typeArr.map(t =>
                            <option value={t["@id"]} key={t.id}>
                                {t.name}
                            </option>
                        )}
                    </select>
                    <button onClick={edit}>Valider</button>
                    <button onClick={swapMode}>Retour</button>
                </>
            }
            {!editMode &&
                <>
                    {ingredientData.name} - {types}
                    <button onClick={swapMode}>Modifier</button>
                </>
            }
        </>
    );
};

export default EditIngredient;