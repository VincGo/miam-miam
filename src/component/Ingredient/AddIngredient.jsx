import React, { useRef } from 'react';
import ingredient from '../../service/ingredient';

const AddIngredient = ({newIngredient}) => {
    const addIngredient = useRef()

    function add(e) {
        e.preventDefault()

        const data = {
            name: addIngredient.current.value
        }

        ingredient.add(data)
            .then((data) => {
                newIngredient(data)
                addIngredient.current.value = ""
            })
            .catch((err) => console.log(err))
    }

    return (
        <form className="add-input br-20 mb-10">
            <input type="text" ref={addIngredient}/>
            <span className="separator" />
            <button onClick={add}>Ajouter</button>
        </form>
    );
};

export default AddIngredient;