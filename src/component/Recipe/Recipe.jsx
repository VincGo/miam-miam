import React, {useEffect, useState} from 'react';
import Title from "../Title/Title";
import crud from "../../service/crud";
import AddRecipe from "./AddRecipe";
import EditRecipe from "./EditRecipe";

const Recipe = () => {
    const [recipe, setRecipe] = useState([])

    useEffect(() => {
        crud.get("recettes")
            .then(data => setRecipe(data))
            .catch(err => console.error(err))
    }, [])

    function newRecipe(data) {
        setRecipe(prevState => [...prevState, data])
    }

    function editRecipe(data) {
        const updateRecipe = recipe.map(i => i.id === data.id ? data : i)
        setRecipe(updateRecipe)
    }

    function deleteRecipe(id) {
        const arr = recipe.filter(i => i.id !== id)
        setRecipe(arr)
    }

    return (
        <div>
            <Title title={"Recette"} titleColor={"color-orange"} titleBg={"bg-orange"}/>
            <div className={"form-container br-5 p-10"}>
                <AddRecipe newRecipe={newRecipe}/>
                {recipe && recipe.map(r =>
                    <div key={r.id} className={"d-flex justify-space-between my-10"}>
                        <EditRecipe editRecipe={editRecipe} removeRecipe={deleteRecipe} recipeData={r}/>
                    </div>
                    )}
            </div>
        </div>
    );
};

export default Recipe;