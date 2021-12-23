import React, {useEffect, useState} from 'react';
import SelectRecipe from "./SelectRecipe";

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
        for (let i = 0; i < arr.length; i++) {

        }
    }

    useEffect(() => {
        if(menuData) {
            prevData()
        }
    }, [menuData])

    const start = menuData?.startDate.substr(0, 10);
    const end = menuData?.endDate.substr(0, 10);

    return (
        <form>
            <label htmlFor="startDate" className={"color-rose"}>Début</label>
            <input type="date" name={"startDate"} id={"startDate"} onChange={handleChangeDate} defaultValue={start}/>
            <label htmlFor="endDate" className={"color-rose"}>Fin</label>
            <input type="date" name={"endDate"} id={"endDate"} onChange={handleChangeDate} defaultValue={end}/>
            <div>
                <h2 className={"color-rose"}>Lundi</h2>
                <SelectRecipe day={"Midi"} name={"mondayLunch"} handleChange={handleChange}
                              defaultValue={menuData?.mondayLunch?.name}/>
                <SelectRecipe day={"Soir"} name={"mondayDinner"} handleChange={handleChange}
                              defaultValue={menuData?.mondayDinner?.name}/>
            </div>
            <div>
                <h2 className={"color-rose"}>Mardi</h2>
                <SelectRecipe day={"Midi"} name={"tuesdayLunch"} handleChange={handleChange}
                              defaultValue={menuData?.tuesdayLunch?.name}/>
                <SelectRecipe day={"Soir"} name={"tuesdayDinner"} handleChange={handleChange}
                              defaultValue={menuData?.tuesdayDinner?.name}/>
            </div>
            <div>
                <h2 className={"color-rose"}>Mercredi</h2>
                <SelectRecipe day={"Midi"} name={"wednesdayLunch"} handleChange={handleChange}
                              defaultValue={menuData?.wednesdayLunch?.name}/>
                <SelectRecipe day={"Soir"} name={"wednesdayDinner"} handleChange={handleChange}
                              defaultValue={menuData?.wednesdayDinner?.name}/>
            </div>
            <div>
                <h2 className={"color-rose"}>Jeudi</h2>
                <SelectRecipe day={"Midi"} name={"thursdayLunch"} handleChange={handleChange}
                              defaultValue={menuData?.thursdayLunch?.name}/>
                <SelectRecipe day={"Soir"} name={"thursdayDinner"} handleChange={handleChange}
                              defaultValue={menuData?.thursdayDinner?.name}/>
            </div>
            <div>
                <h2 className={"color-rose"}>Vendredi</h2>
                <SelectRecipe day={"Midi"} name={"fridayLunch"} handleChange={handleChange}
                              defaultValue={menuData?.fridayLunch?.name}/>
                <SelectRecipe day={"Soir"} name={"fridayDinner"} handleChange={handleChange}
                              defaultValue={menuData?.fridayDinner?.name}/>
            </div>
            <div>
                <h2 className={"color-rose"}>Samedi</h2>
                <SelectRecipe day={"Midi"} name={"saturdayLunch"} handleChange={handleChange}
                              defaultValue={menuData?.saturdayLunch?.name}/>
                <SelectRecipe day={"Soir"} name={"saturdayDinner"} handleChange={handleChange}
                              defaultValue={menuData?.saturdayDinner?.name}/>
            </div>
            <div>
                <h2 className={"color-rose"}>Dimanche</h2>
                <SelectRecipe day={"Midi"} name={"sundayLunch"} handleChange={handleChange}
                              defaultValue={menuData?.sundayLunch?.name}/>
                <SelectRecipe day={"Soir"} name={"sundayDinner"} handleChange={handleChange}
                              defaultValue={menuData?.sundayDinner?.name}/>
            </div>
            <button onClick={add}>Ajouter le menu</button>
        </form>
    );
};

export default FormMenu;