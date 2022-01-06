import React from 'react';

const IngredientMenu = ({ingredientList, newIngredientList}) => {

  //Récupère les infos des ingrédients checked, et les mets dans un tableau
  function add(e) {
    const form = document.querySelector("#ingredientList")
    const arr = []
    for (let i = 0; i < form.length; i++) {
      if (form[i].checked) {
        const obj = {
          id: form[i].dataset.id,
          name: form[i].name,
          quantity: form[i].dataset.quantity,
          ingredient_id: form[i].dataset.ingredient_id
        }
        arr.push(obj)
      }
    }
    newIngredientList(arr)
    e.preventDefault()
  }

  return (
    <div>
      <form id={"ingredientList"}>
        {ingredientList && ingredientList.map((p, i) =>
          <div key={i}>
            <input type="checkbox" id={p.ingredient[0].name} name={p.ingredient[0].name} data-id={p['@id']}
                   data-quantity={p.quantity} data-ingredient_id={p.ingredient[0]['@id']} defaultChecked={true}/>
            <label htmlFor={p.ingredient[0].name}>
              {p.ingredient[0].name} ({p.quantity})
            </label>
          </div>
        )}
      </form>
      <button onClick={add}>Ajouter à la liste</button>
    </div>
  );
};

export default IngredientMenu;