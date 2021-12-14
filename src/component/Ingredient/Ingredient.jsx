import React, { useEffect, useState } from 'react';
import ingredient from '../../service/ingredient';
import AddIngredient from './AddIngredient';
import DeleteIngredient from './DeleteIngredient';
import EditIngredient from './EditIngredient';
import './ingredient.scss'

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

    function changeData (data) {
        const updateIngredient = ingredients.map((i) => i.id === data.id ? data : i)
        setingredients(updateIngredient)
    }

    return (
        <div>
            <h1>Ingredients</h1>
            <div className="card-ingredient br-5 p-10">
                <AddIngredient newIngredient={newIngredient}/>
                {ingredients && ingredients.map((i) =>
                    <div key={i.id}>
                        <EditIngredient ingredientData={i} visible={false} editIngredient={changeData}/>
                        <DeleteIngredient ingredientId={i.id} ingredientDelete={ingredientDelete}/>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Ingredient;