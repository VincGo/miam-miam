import React, { useEffect, useState } from 'react';
import ingredient from '../service/ingredient';

const Ingredient = () => {
    const [ingredients, setingredients] = useState([])

    useEffect(() => {
        ingredient.get()
        .then((data) => setingredients(data))
        .catch((err) => console.log(err))
    }, [])

    return (
        <div>
            <h1>Ingredients</h1>
            {ingredients && ingredients.map((i) => <li>{i.name}</li>)}
        </div>
    );
};

export default Ingredient;