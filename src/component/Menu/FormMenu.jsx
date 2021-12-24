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
        const obj = {}
        for (let i = 0; i < arr.length; i++) {
            obj[arr[i].name] = arr[i].value ? arr[i].dataset.id : null
        }
        setMenu(obj)
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
            <input type="date" name={"startDate"} id={"startDate"} onChange={handleChangeDate} defaultValue={start} data-id={menuData?.startDate}/>
            <label htmlFor="endDate" className={"color-rose"}>Fin</label>
            <input type="date" name={"endDate"} id={"endDate"} onChange={handleChangeDate} defaultValue={end} data-id={menuData?.endDate}/>
            <div>
                <h2 className={"color-rose"}>Lundi</h2>
                <SelectRecipe day={"Midi"} name={"mondayLunch"} handleChange={handleChange}
                              defaultValue={menuData?.mondayLunch?.name} dataId={menuData && menuData.mondayLunch && menuData.mondayLunch["@id"]}/>
                <SelectRecipe day={"Soir"} name={"mondayDinner"} handleChange={handleChange}
                              defaultValue={menuData?.mondayDinner?.name} dataId={menuData && menuData.mondayDinner && menuData.mondayDinner["@id"]}/>
            </div>
            <div>
                <h2 className={"color-rose"}>Mardi</h2>
                <SelectRecipe day={"Midi"} name={"tuesdayLunch"} handleChange={handleChange}
                              defaultValue={menuData?.tuesdayLunch?.name} dataId={menuData && menuData.tuesdayLunch && menuData.tuesdayLunch["@id"]}/>
                <SelectRecipe day={"Soir"} name={"tuesdayDinner"} handleChange={handleChange}
                              defaultValue={menuData?.tuesdayDinner?.name} dataId={menuData && menuData.tuesdayDinner && menuData.tuesdayDinner["@id"]}/>
            </div>
            <div>
                <h2 className={"color-rose"}>Mercredi</h2>
                <SelectRecipe day={"Midi"} name={"wednesdayLunch"} handleChange={handleChange}
                              defaultValue={menuData?.wednesdayLunch?.name} dataId={menuData && menuData.wednesdayLunch && menuData.wednesdayLunch["@id"]}/>
                <SelectRecipe day={"Soir"} name={"wednesdayDinner"} handleChange={handleChange}
                              defaultValue={menuData?.wednesdayDinner?.name} dataId={menuData && menuData.wednesdayDinner && menuData.wednesdayDinner["@id"]}/>
            </div>
            <div>
                <h2 className={"color-rose"}>Jeudi</h2>
                <SelectRecipe day={"Midi"} name={"thursdayLunch"} handleChange={handleChange}
                              defaultValue={menuData?.thursdayLunch?.name} dataId={menuData && menuData.thursdayLunch && menuData.thursdayLunch["@id"]}/>
                <SelectRecipe day={"Soir"} name={"thursdayDinner"} handleChange={handleChange}
                              defaultValue={menuData?.thursdayDinner?.name} dataId={menuData && menuData.thursdayDinner && menuData.thursdayDinner["@id"]}/>
            </div>
            <div>
                <h2 className={"color-rose"}>Vendredi</h2>
                <SelectRecipe day={"Midi"} name={"fridayLunch"} handleChange={handleChange}
                              defaultValue={menuData?.fridayLunch?.name} dataId={menuData && menuData.fridayLunch && menuData.fridayLunch["@id"]}/>
                <SelectRecipe day={"Soir"} name={"fridayDinner"} handleChange={handleChange}
                              defaultValue={menuData?.fridayDinner?.name} dataId={menuData && menuData.fridayDinner && menuData.fridayDinner["@id"]}/>
            </div>
            <div>
                <h2 className={"color-rose"}>Samedi</h2>
                <SelectRecipe day={"Midi"} name={"saturdayLunch"} handleChange={handleChange}
                              defaultValue={menuData?.saturdayLunch?.name} dataId={menuData && menuData.saturdayLunch && menuData.saturdayLunch["@id"]}/>
                <SelectRecipe day={"Soir"} name={"saturdayDinner"} handleChange={handleChange}
                              defaultValue={menuData?.saturdayDinner?.name} dataId={menuData && menuData.saturdayDinner && menuData.saturdayDinner["@id"]}/>
            </div>
            <div>
                <h2 className={"color-rose"}>Dimanche</h2>
                <SelectRecipe day={"Midi"} name={"sundayLunch"} handleChange={handleChange}
                              defaultValue={menuData?.sundayLunch?.name} dataId={menuData && menuData.sundayLunch && menuData.sundayLunch["@id"]}/>
                <SelectRecipe day={"Soir"} name={"sundayDinner"} handleChange={handleChange}
                              defaultValue={menuData?.sundayDinner?.name} dataId={menuData && menuData.sundayDinner && menuData.sundayDinner["@id"]}/>
            </div>
            <button onClick={add}>Ajouter le menu</button>
        </form>
    );
};

export default FormMenu;