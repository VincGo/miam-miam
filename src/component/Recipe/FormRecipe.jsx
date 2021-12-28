import React, {useEffect, useRef, useState} from 'react';
import produce from "immer";
import SelectIngredient from "./SelectIngredient";
import crud from "../../service/crud";

const FormRecipe = ({dataRecipe, dataEdit}) => {
    const recipe = useRef()
    const [ingredients, setIngredients] = useState([{
        ingredient: [""],
        quantity: 0
    }])
    const [ingrdtArr, setIngrdArr] = useState([])

    //Ajout de nouveaux champs pour ajouter un ingrédient
    function newIngredient(e) {
        setIngredients(prevState => [...prevState, {
            ingredient: [""],
            quantity: 0
        }])
        e.preventDefault()
    }

    function removeIngredient(e, i) {
        e.preventDefault()
        setIngredients(prevState => prevState.filter(x => x.ingredient !== i.ingredient))
    }

    //Récupère l'iri de l'ingrédient
    function changeNameToIri(allIngredient, recipeIngredient) {
        const arr = []
        const obj = {
            name: recipe.current.value,
            ingredientRecettes: arr
        }
        for(let i=0; i<recipeIngredient.length; i++) {
            for(let j=0; j<allIngredient.length; j++) {
                const nameRecipeIngrdt = recipeIngredient[i].ingredient instanceof Array ? recipeIngredient[i].ingredient[0] : recipeIngredient[i].ingredient
                const quantity = recipeIngredient[i].quantity
                const nameAllIngrt = allIngredient[j].name
                const iri = allIngredient[j]["@id"]
                if(nameRecipeIngrdt === nameAllIngrt) {
                    const data = {
                        ingredient: [iri],
                        quantity: quantity
                    }
                    arr.push(data)
                }
            }
        }
        dataRecipe(obj)
    }

    function add(e) {
        changeNameToIri(ingrdtArr, ingredients)
        e.preventDefault()
    }

    function newArr(prevArr = []) {
        const arr = []
        for(let i=0; i<prevArr.length; i++) {
            const name = prevArr[i].ingredient[0].name
            const quantity = prevArr[i].quantity
            const data = {
                ingredient: [name],
                quantity: quantity
            }
            arr.push(data)
        }
        setIngredients(arr)
    }

    useEffect(() => {
        if(dataEdit) {
            newArr(dataEdit.ingredientRecettes)
        }
    }, [dataEdit])

    useEffect(() => {
        crud.get("ingredients")
            .then(data => setIngrdArr(data))
            .catch(err => console.error(err))
    }, [])

    return (
        <div className={"form-container br-5 p-10"}>
            <form className="form-input br-20 mb-10">
                <input type="text" ref={recipe} placeholder={"Nom de la recette"} defaultValue={dataEdit && dataEdit.name}/>
                {ingredients && ingredients.map((i, index) =>
                    <div className={"d-flex"} key={index}>
                        <input type="text" list={"ingredient"} placeholder={"Ingrédient"} defaultValue={i.ingredient[0]} onChange={e => {
                            const ingredient = e.target.value
                            setIngredients(prevState => produce(prevState, v => {
                                v[index].ingredient = ingredient
                            }))
                        }}/>
                        <datalist id={"ingredient"}>
                            <SelectIngredient/>
                        </datalist>
                        <input type="number" placeholder={"Quantité"} value={i.quantity} onChange={e => {
                            const quantity = e.target.value
                            setIngredients(prevState => produce(prevState, v => {
                                v[index].quantity = parseInt(quantity, 10)
                            }))
                        }}/>
                        <button onClick={(e) => removeIngredient(e, i)}>
                            X
                        </button>
                    </div>
                )}
                <button onClick={newIngredient}>Plus d'ingrédient</button>
            </form>
            <button onClick={add}>Ajouter la recette</button>
        </div>
    );
};

export default FormRecipe;