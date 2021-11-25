import React, { useEffect, useState } from 'react';
import ingredient from '../service/ingredient';
import AddIngredient from './AddIngredient';
import DeleteIngredient from './DeleteIngredient';

const Ingredient = () => {
    const [ingredients, setingredients] = useState([])

    //Au chargement de la page récupère les ingrédients dans la BD
    useEffect(() => {
        ingredient.get()
            .then((data) => setingredients(data))
            .catch((err) => console.log(err))
    }, [])

    //Ajoute le nouvel ingrédient dans le tableau ingredients
    function newIngredient (data) {
        setingredients(prevArray => [...prevArray, data])
    }

    //Retire l'élément lors de la suppression
    function ingredientDelete (id) {
        const newArr = ingredients.filter((i) => i.id !== id)
        setingredients(newArr)
    }

    return (
        <div>
            <h1>Ingredients</h1>
            <AddIngredient newIngredient={newIngredient}/>
            {ingredients && ingredients.map((i) => 
                <li key={i.id}>
                    {i.name} <DeleteIngredient ingredientId={i.id} ingredientDelete={ingredientDelete}/>
                </li>
            )}
        </div>
    );
};

export default Ingredient;