import React, {useRef, useState} from 'react';
import SelectIngredient from "../Recipe/SelectIngredient";
import crud from "../../service/crud";

const EditListProduct = ({product, removeId, updateProduct}) => {
  const [editMode, setEditMode] = useState(false)
  const [id, setId] = useState(product.ingredient[0]["@id"])
  const nameRef = useRef()
  const quantityRef = useRef()

  function swapMode() {
    setEditMode(!editMode)
  }

  function remove() {
    removeId(product.id)
  }

  //Récupère les données des inputs
  function getData(e) {
    const quantity = parseInt(quantityRef.current.value, 10)
    const data = {
      quantity: quantity,
      ingredient: [nameRef.current.dataset.id]
    }
    edit(data)
    swapMode()
    e.preventDefault()
  }

  function edit(data) {
    crud.edit("ingredient_recettes", product.id, data)
      .then((data) => updateProduct(data))
      .catch(err => console.error(err))
  }

  //Création d'un tableau avec les données de la dataliste
  function options() {
    const dataList = document.querySelector("#newProduct")
    const options = dataList.childNodes
    const arr = []
    for(const a of options) {
      const obj = {
        id: a.attributes.name.value,
        name: a.value
      }
      arr.push(obj)
    }
    return arr
  }

  //Change data-id en fonction de l'ingrédient choisi
  function handleChange() {
    const arr = options()
    const filter = arr.filter(i => i.name === nameRef.current.value)
    if(filter.length > 0) {
      setId(filter[0].id)
    }
  }

  return (
    <>
      {!editMode &&
        <>
          <span className={"color-blue"}>
            {product.ingredient[0].name} ({product.quantity})
          </span>
          <div>
            <button onClick={swapMode} className={"btn color-orange"}>Modifier</button>
            <button onClick={remove} className={"btn color-rose"}>Supprimer</button>
          </div>
        </>
      }
      {editMode &&
        <div className={"d-flex justify-space-between w-100 form-input br-20"}>
          <input type="text" defaultValue={product.ingredient[0].name} list={"editProduct"} ref={nameRef} data-id={id} onChange={handleChange}/>
          <datalist id={"editProduct"}>
            <SelectIngredient />
          </datalist>
          <input type="number" defaultValue={product.quantity} ref={quantityRef}/>
          <>
            <button onClick={getData}>Valider</button>
            <button onClick={swapMode} className={"mr-25"}>Retour</button>
          </>
        </div>
      }
    </>
  );
};

export default EditListProduct;