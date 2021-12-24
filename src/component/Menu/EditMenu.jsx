import React, {useEffect, useState} from 'react';
import Title from "../Title/Title";
import MenuTitle from "./MenuTitle";
import {useParams} from "react-router-dom";
import crud from "../../service/crud";
import FormMenu from "./FormMenu";

const EditMenu = () => {
    const {id} = useParams()
    const [menu, setMenu] = useState()

    function edit(data) {
        crud.edit("menus", id, data)
            .then(() => console.log("Success"))
            .catch(err => console.error(err))
    }

    useEffect(() => {
        crud.getSingle("menus", id)
            .then(data => setMenu(data))
            .catch(err => console.error(err))
    }, [id])

    return (
        <div>
            <Title title={<MenuTitle menu={menu}/>} titleColor={"color-rose"} titleBg={"bg-rose"}/>
            <FormMenu menuData={menu} addMenu={edit}/>
        </div>
    );
};

export default EditMenu;