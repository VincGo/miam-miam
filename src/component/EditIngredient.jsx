import React, { useRef, useState } from 'react';
import ingredient from '../service/ingredient';

const EditIngredient = ({ingredientData, editIngredient}) => {
    const [editMode, setEditMode] = useState(false)
    const ingredientRef = useRef()

    function swapMode() {
        setEditMode(!editMode)
    }

    function edit(e) {
        e.preventDefault()

        const data = {
            name: ingredientRef.current.value
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
                    <button onClick={edit}>Valider</button>
                    <button onClick={swapMode}>Retour</button>
                </>
            }
            {!editMode && <button onClick={swapMode}>Modifier</button>}
        </>
    );
};

export default EditIngredient;