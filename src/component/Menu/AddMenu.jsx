import React from 'react';
import Title from "../Title/Title";
import FormMenu from "./FormMenu";
import crud from "../../service/crud";

const AddMenu = () => {

    function add(data) {
        crud.add("menus", data)
            .then(() => console.log("Success"))
            .catch(err => console.error(err))
    }

    return (
        <div>
            <Title title={"Nouveau menu"} titleBg={"bg-rose"} titleColor={"color-rose"}/>
            <FormMenu addMenu={add}/>
        </div>
    );
};

export default AddMenu;