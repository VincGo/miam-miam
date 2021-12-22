import React, {useState} from 'react';
import SelectRecipe from "./SelectRecipe";
import crud from "../../service/crud";

const AddMenu = () => {

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

    function handleChange(e) {
        setMenu({...menu, [e.target.name]: e.target.value})
    }

    function add(e) {
        crud.add("menus", menu)
            .then(() => console.log("Success"))
            .catch(err => console.error(err))

        e.preventDefault()
    }

    return (
        <form>
            <label htmlFor="startDate" className={"color-rose"}>Début</label>
            <input type="date" name={"startDate"} id={"startDate"} onChange={handleChange}/>
            <label htmlFor="endDate" className={"color-rose"}>Fin</label>
            <input type="date" name={"endDate"} id={"endDate"} onChange={handleChange}/>
            <div>
                <h2 className={"color-rose"}>Lundi</h2>
                <SelectRecipe day={"Midi"} name={"mondayLunch"} handleChange={handleChange}/>
                <SelectRecipe day={"Soir"} name={"mondayDinner"} handleChange={handleChange}/>
            </div>
            <div>
                <h2 className={"color-rose"}>Mardi</h2>
                <SelectRecipe day={"Midi"} name={"tuesdayLunch"} handleChange={handleChange}/>
                <SelectRecipe day={"Soir"} name={"tuesdayDinner"} handleChange={handleChange}/>
            </div>
            <div>
                <h2 className={"color-rose"}>Mercredi</h2>
                <SelectRecipe day={"Midi"} name={"wednesdayLunch"} handleChange={handleChange}/>
                <SelectRecipe day={"Soir"} name={"wednesdayDinner"} handleChange={handleChange}/>
            </div>
            <div>
                <h2 className={"color-rose"}>Jeudi</h2>
                <SelectRecipe day={"Midi"} name={"thursdayLunch"} handleChange={handleChange}/>
                <SelectRecipe day={"Soir"} name={"thursdayDinner"} handleChange={handleChange}/>
            </div>
            <div>
                <h2 className={"color-rose"}>Vendredi</h2>
                <SelectRecipe day={"Midi"} name={"fridayLunch"} handleChange={handleChange}/>
                <SelectRecipe day={"Soir"} name={"fridayDinner"} handleChange={handleChange}/>
            </div>
            <div>
                <h2 className={"color-rose"}>Samedi</h2>
                <SelectRecipe day={"Midi"} name={"saturdayLunch"} handleChange={handleChange}/>
                <SelectRecipe day={"Soir"} name={"saturdayDinner"} handleChange={handleChange}/>
            </div>
            <div>
                <h2 className={"color-rose"}>Dimanche</h2>
                <SelectRecipe day={"Midi"} name={"sundayLunch"} handleChange={handleChange}/>
                <SelectRecipe day={"Soir"} name={"sundayDinner"} handleChange={handleChange}/>
            </div>
            <button onClick={add}>Ajouter le menu</button>
        </form>
    );
};

export default AddMenu;