import React, { useRef } from 'react';
import ingredient from '../service/ingredient';

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
        <form>
            <input type="text" ref={addIngredient}/>
            <button onClick={add}>Ajouter</button>
        </form>
    );
};

export default AddIngredient;