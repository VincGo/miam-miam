import React, {useEffect, useState} from 'react';
import crud from "../../service/crud";
import SelectIngredient from "../Recipe/SelectIngredient";

const NewProduct = ({addProduct}) => {
  const [ingredients, setIngredients] = useState([])
  const [data, setData] = useState({})

  //Récupère les données lors du clique
  function add(e) {
    newProduct(data)
    e.preventDefault()
  }

  //Envoie les données à la BD
  function newProduct(data) {
    crud.add("ingredient_recettes", data)
      .then(data => addProduct(data))
      .catch(err => console.error(err))
  }

  function handleChangeQuantity(e) {
    const quantity = parseInt(e.target.value, 10)
    setData({...data, [e.target.name]: quantity})
  }

  //Set data avec l'iri de l'ingrédient
  function handleChangeIngredient(e, allIngredients) {
    const productName = e.target.value
    const iriArr = allIngredients.filter(i => i.name === productName)
    if(iriArr.length > 0) {
      const iri = iriArr[0]['@id']
      setData({...data, [e.target.name]: [iri]})
    }
  }

  //Récupère tous les ingrédients pour retrourer l'IRI de l'ingrédient
  useEffect(() => {
    crud.get("ingredients")
      .then(data => setIngredients(data))
      .catch(err => console.error(err))
  }, [])

  return (
    <form className="form-input br-20 mb-10 d-flex justify-space-between">
      <input type="text" placeholder={"Nom du produit"}  list={"newProduct"}  name={"ingredient"} onChange={(e) => handleChangeIngredient(e, ingredients)}/>
      <datalist id={"newProduct"} >
        <SelectIngredient/>
      </datalist>
      <input type="number" placeholder={"Quantité"} name={"quantity"} onChange={handleChangeQuantity}/>
      <div>
        <span className="separator"/>
        <button onClick={add} className={"mr-25"}>Ajouter</button>
      </div>
    </form>
  );
};

export default NewProduct;