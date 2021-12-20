import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import crud from "../../service/crud";
import Title from "../Title/Title";

const ShowRecipe = () => {
    const {id} = useParams()
    const [recette, setRecette] = useState([])

    useEffect(() => {
        crud.getSingle("recettes", id)
            .then(data => setRecette(data))
            .catch(err => console.error(err))
    }, [id])

    return (
        <div>
            <Title title={recette.name} titleColor={"color-orange"} titleBg={"bg-orange"}/>
            <h2 className={"color-orange"}>Ingrédients: </h2>
            {recette.ingredientRecettes && recette.ingredientRecettes.map((r, i) =>
                <li key={i} className={"color-orange"}>{r.ingredient[0].name} ({r.quantity})</li>
            )}
        </div>
    );
};

export default ShowRecipe;