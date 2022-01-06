import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import crud from "../../service/crud";

const AddList = ({newIngredientList}) => {
  const [showList, setShowList] = useState([])
  const {id} = useParams()

  //Ajoute les nouveaux ingrédients dans les tableau showList
  function newIngredient(ingredients) {
    for (let i = 0; i < ingredients.length; i++) {
      const findIndex = showList.findIndex(item => item.name === ingredients[i].name)
      if (findIndex === -1) {
        setShowList(prevData => [...prevData, ingredients[i]])
      } else {
        //Si deux ingrédients ont le même nom alors on va créer un nouvel ingrédientRecette en ajoutant les deux quantités
        const firstIngr = parseInt(showList[findIndex].quantity, 10)
        const secondIngr = parseInt(ingredients[i].quantity, 10)
        const quantity = firstIngr + secondIngr
        const obj = {
          quantity: quantity,
          ingredient: [ingredients[i].ingredient_id]
        }
        const length = ingredients.length
        addNewIngredient(obj, findIndex, length, i)
      }
    }
  }

  //Création du nouvel ingrédientRecette
  function addNewIngredient(data, index, length, i) {
    crud.add("ingredient_recettes", data)
      .then(data => {
        const obj = {
          id: data['@id'],
          ingredient_id: data.ingredient[0]['@id'],
          name: data.ingredient[0].name,
          quantity: data.quantity
        }
        replaceIngredientRecette(obj, index, length, i)
      })
      .catch(err => console.error(err))
  }

  //Change ingredientRecette par le nouveau créer
  function replaceIngredientRecette(data, index, length, i) {
    const arr = showList
    arr[index] = data
    let n = i + 1
    if (n === length) {
      setShowList(prev => [...prev])
    }
    return arr
  }

  //Retourne un l'objet pour la création d'une nouvelle liste
  function dataList(listArr) {
    //Créer un nouveau tableau pour y mettre uniquement l'iri des ingredientRecettes
    const arr = []
    for (const list of listArr) {
      arr.push(list.id)
    }

    return {
      menu: "api/menus/" + id,
      product: arr
    }
  }

  //Enregistre une nouvelle liste
  function saveList() {
    const data = dataList(showList)

    crud.add('listes', data)
      .then(() => console.log("Success"))
      .catch(err => console.error(err))
  }

  useEffect(() => newIngredient(newIngredientList), [newIngredientList])

  return (
    <div>
      {showList.map((p, index) =>
        <p className={"color-rose"} key={index}>
          {p.name} ({p.quantity})
        </p>
      )}
      <button onClick={saveList}>
        Sauvegarder la liste
      </button>
    </div>
  );
};

export default AddList;