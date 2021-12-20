import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import crud from "../../service/crud";
import Title from "../Title/Title";
import FormRecipe from "./FormRecipe";
import {useNavigate} from "react-router-dom";

const EditRecipe = () => {
    const {id} = useParams()
    const [recipe, setRecipe] = useState()
    const navigate = useNavigate()

    function edit(data) {
        crud.edit("recettes", id, data)
            .then(() => navigate("/recette"))
            .catch(err => console.error(err))
    }

    useEffect(() => {
        crud.getSingle("recettes", id)
            .then(data => setRecipe(data))
            .catch(err => console.error(err))
    }, [id])

    return (
        <div>
            <Title title={"Modification d'un recette"} titleBg={"bg-orange"} titleColor={"color-orange"}/>
            <FormRecipe dataEdit={recipe} dataRecipe={edit}/>
        </div>
    );
};

export default EditRecipe;