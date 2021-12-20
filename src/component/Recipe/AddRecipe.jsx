import React from 'react';
import Title from "../Title/Title";
import FormRecipe from "./FormRecipe";
import crud from "../../service/crud";
import {useNavigate} from "react-router-dom"

const AddRecipe = () => {
    const navigate = useNavigate()
    function add(data) {
        crud.add("recettes", data)
            .then(() => navigate("/recette"))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <Title title={"Ajout d'une recette"} titleBg={"bg-orange"} titleColor={"color-orange"}/>
            <FormRecipe dataRecipe={add}/>
        </div>

    );
};

export default AddRecipe;