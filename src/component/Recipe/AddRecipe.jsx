import React, {useRef} from 'react';
import crud from "../../service/crud";

const AddRecipe = ({newRecipe}) => {
    const addRecipe = useRef()

    function add(e) {
        e.preventDefault()

        const data = {
            name: addRecipe.current.value
        }

        crud.add("recettes", data)
            .then(data => {
                newRecipe(data)
                addRecipe.current.value = ""
            })
            .catch(err => console.log(err))
    }

    return (
        <form className="form-input br-20 mb-10 d-flex justify-space-between">
            <input type="text" ref={addRecipe}/>
            <div>
                <span className="separator" />
                <button onClick={add} className={"mr-25"}>Ajouter</button>
            </div>
        </form>
    );
};

export default AddRecipe;