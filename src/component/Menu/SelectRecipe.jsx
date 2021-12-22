import React, {useEffect, useState} from 'react';
import crud from "../../service/crud";

const SelectRecipe = ({day, name, handleChange}) => {
    const [recipe, setRecipe] = useState([])

    useEffect(() => {
        crud.get("recettes")
            .then(data => setRecipe(data))
            .catch(err => console.log(err))
    }, [])

    function getNameAndValue(e) {
        handleChange(e)
    }

    return (
        <>
            <label htmlFor={name} className={"color-rose"}>{day}: </label>
            <select name={name} id={name} onChange={getNameAndValue}>
                {recipe && recipe.map(recipe =>
                    <option key={recipe.id} value={recipe["@id"]}>
                        {recipe.name}
                    </option>
                )}
            </select>
        </>
    );
};

export default SelectRecipe;