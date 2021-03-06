import React, {useEffect, useState} from 'react';
import SelectRecipe from "./SelectRecipe";
import IngredientMenu from "./IngredientMenu";
import AddList from "../Liste/AddList";

const FormMenu = ({addMenu, menuData}) => {
  const [menu, setMenu] = useState({
    startDate: "",
    endDate: "",
    mondayLunch: null,
    mondayDinner: null,
    tuesdayLunch: null,
    tuesdayDinner: null,
    wednesdayLunch: null,
    wednesdayDinner: null,
    thursdayLunch: null,
    thursdayDinner: null,
    fridayLunch: null,
    fridayDinner: null,
    saturdayLunch: null,
    saturdayDinner: null,
    sundayLunch: null,
    sundayDinner: null,
  })

  const [list, setList] = useState([])
  const [showList, setShowList] = useState([])

  function handleChangeDate(e) {
    setMenu({...menu, [e.target.name]: e.target.value})
  }

  function handleChange(e) {
    setMenu({...menu, [e.target.name]: e.target.dataset.id})
  }

  function add(e) {
    addMenu(menu)
    e.preventDefault()
  }

  function prevData() {
    const arr = document.querySelector('form')
    const obj = {}
    for (let i = 0; i < arr.length; i++) {
      obj[arr[i].name] = arr[i].value ? arr[i].dataset.id : null
    }
    setMenu(obj)
  }

  function addList(data) {
    setList(data)
  }

  //Je récupère les un tableau d'objet des ingrédients checked
  function newIngredientList (data) {
    setShowList(data)
  }

  useEffect(() => {
    if (menuData) {
      prevData()
    }
  }, [menuData])

  const start = menuData?.startDate.substr(0, 10);
  const end = menuData?.endDate.substr(0, 10);

  return (
    <div className={"d-flex"}>
      <form className={"mr-25"}>
        <label htmlFor="startDate" className={"color-rose"}>Début</label>
        <input type="date" name={"startDate"} id={"startDate"} onChange={handleChangeDate} defaultValue={start}
               data-id={menuData?.startDate}/>
        <label htmlFor="endDate" className={"color-rose"}>Fin</label>
        <input type="date" name={"endDate"} id={"endDate"} onChange={handleChangeDate} defaultValue={end}
               data-id={menuData?.endDate}/>
        <div>
          <h2 className={"color-rose"}>Lundi</h2>
          <SelectRecipe day={"Midi"} name={"mondayLunch"} handleChange={handleChange}
                        defaultValue={menuData?.mondayLunch?.name}
                        dataId={menuData && menuData.mondayLunch && menuData.mondayLunch["@id"]} addList={addList}/>
          <SelectRecipe day={"Soir"} name={"mondayDinner"} handleChange={handleChange}
                        defaultValue={menuData?.mondayDinner?.name}
                        dataId={menuData && menuData.mondayDinner && menuData.mondayDinner["@id"]} addList={addList}/>
        </div>
        <div>
          <h2 className={"color-rose"}>Mardi</h2>
          <SelectRecipe day={"Midi"} name={"tuesdayLunch"} handleChange={handleChange}
                        defaultValue={menuData?.tuesdayLunch?.name}
                        dataId={menuData && menuData.tuesdayLunch && menuData.tuesdayLunch["@id"]} addList={addList}/>
          <SelectRecipe day={"Soir"} name={"tuesdayDinner"} handleChange={handleChange}
                        defaultValue={menuData?.tuesdayDinner?.name}
                        dataId={menuData && menuData.tuesdayDinner && menuData.tuesdayDinner["@id"]} addList={addList}/>
        </div>
        <div>
          <h2 className={"color-rose"}>Mercredi</h2>
          <SelectRecipe day={"Midi"} name={"wednesdayLunch"} handleChange={handleChange}
                        defaultValue={menuData?.wednesdayLunch?.name}
                        dataId={menuData && menuData.wednesdayLunch && menuData.wednesdayLunch["@id"]} addList={addList}/>
          <SelectRecipe day={"Soir"} name={"wednesdayDinner"} handleChange={handleChange}
                        defaultValue={menuData?.wednesdayDinner?.name}
                        dataId={menuData && menuData.wednesdayDinner && menuData.wednesdayDinner["@id"]} addList={addList}/>
        </div>
        <div>
          <h2 className={"color-rose"}>Jeudi</h2>
          <SelectRecipe day={"Midi"} name={"thursdayLunch"} handleChange={handleChange}
                        defaultValue={menuData?.thursdayLunch?.name}
                        dataId={menuData && menuData.thursdayLunch && menuData.thursdayLunch["@id"]} addList={addList}/>
          <SelectRecipe day={"Soir"} name={"thursdayDinner"} handleChange={handleChange}
                        defaultValue={menuData?.thursdayDinner?.name}
                        dataId={menuData && menuData.thursdayDinner && menuData.thursdayDinner["@id"]} addList={addList}/>
        </div>
        <div>
          <h2 className={"color-rose"}>Vendredi</h2>
          <SelectRecipe day={"Midi"} name={"fridayLunch"} handleChange={handleChange}
                        defaultValue={menuData?.fridayLunch?.name}
                        dataId={menuData && menuData.fridayLunch && menuData.fridayLunch["@id"]} addList={addList}/>
          <SelectRecipe day={"Soir"} name={"fridayDinner"} handleChange={handleChange}
                        defaultValue={menuData?.fridayDinner?.name}
                        dataId={menuData && menuData.fridayDinner && menuData.fridayDinner["@id"]} addList={addList}/>
        </div>
        <div>
          <h2 className={"color-rose"}>Samedi</h2>
          <SelectRecipe day={"Midi"} name={"saturdayLunch"} handleChange={handleChange}
                        defaultValue={menuData?.saturdayLunch?.name}
                        dataId={menuData && menuData.saturdayLunch && menuData.saturdayLunch["@id"]} addList={addList}/>
          <SelectRecipe day={"Soir"} name={"saturdayDinner"} handleChange={handleChange}
                        defaultValue={menuData?.saturdayDinner?.name}
                        dataId={menuData && menuData.saturdayDinner && menuData.saturdayDinner["@id"]} addList={addList}/>
        </div>
        <div>
          <h2 className={"color-rose"}>Dimanche</h2>
          <SelectRecipe day={"Midi"} name={"sundayLunch"} handleChange={handleChange}
                        defaultValue={menuData?.sundayLunch?.name}
                        dataId={menuData && menuData.sundayLunch && menuData.sundayLunch["@id"]} addList={addList}/>
          <SelectRecipe day={"Soir"} name={"sundayDinner"} handleChange={handleChange}
                        defaultValue={menuData?.sundayDinner?.name}
                        dataId={menuData && menuData.sundayDinner && menuData.sundayDinner["@id"]} addList={addList}/>
        </div>
        <button onClick={add}>Ajouter le menu</button>
      </form>
      <IngredientMenu ingredientList={list} newIngredientList={newIngredientList}/>
      <AddList newIngredientList={showList} />
    </div>

  );
};

export default FormMenu;