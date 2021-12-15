import React, {useRef, useState} from 'react';
import crud from "../../service/crud";
import DeleteRecipe from "./DeleteRecipe";

const EditRecipe = ({recipeData, editRecipe, removeRecipe}) => {
    const [editMode, setEditMode] = useState(false)
    const recipeRef = useRef()

    function swapMode() {
        setEditMode(!editMode)
    }

    function edit(e) {
        e.preventDefault()

        const data = {
            name: recipeRef.current.value
        }

        crud.edit("recettes", recipeData.id, data)
            .then((data) => editRecipe(data))
            .catch((err) => console.log(err))

        swapMode()
    }

    function deleteType(data) {
        removeRecipe(data)
    }

    return (
        <>
            {editMode &&
                <div className={"d-flex justify-space-between w-100 form-input br-20"}>
                    <input type="text" defaultValue={recipeData.name} ref={recipeRef}/>
                    <>
                        <button onClick={edit}>Valider</button>
                        <button onClick={swapMode} className={"mr-25"}>Retour</button>
                    </>
                </div>
            }
            {!editMode &&
                <>
                    <span className={"color-blue"}>{recipeData.name}</span>
                    <div>
                        <button onClick={swapMode} className={"btn color-orange"}>Modifier</button>
                        <DeleteRecipe recipeData={deleteType} recipeId={recipeData.id}/>
                    </div>
                </>
            }
        </>
    );
};

export default EditRecipe;