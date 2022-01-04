import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import crud from "../../service/crud";

const AddList = ({newIngredientList}) => {
  const [showList, setShowList] = useState([])
  const {id} = useParams()

  //Ajoute les nouveaux ingrédients dans les tableau showList
  function newIngredient(ingredients) {
    for (const ingredient of ingredients) {
      const findIndex = showList.findIndex(i => i.name === ingredient.name)
      if (findIndex === -1) {
        setShowList(prevData => [...prevData, ingredient])
      } else {
        console.log(showList[findIndex], ingredient)
      }
    }
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

  useEffect(() => {
    newIngredient(newIngredientList)
  }, [newIngredientList])

  return (
    <div>
      {showList.map((p, index) =>
        <p className={"color-rose"} key={index}>
          {p.name} ({p.quantity}) {p.id}
        </p>
      )}
      <button onClick={saveList}>
        Sauvegarder la liste
      </button>
    </div>
  );
};

export default AddList;