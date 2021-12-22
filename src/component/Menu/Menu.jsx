import React, {useEffect, useState} from 'react';
import Title from "../Title/Title";
import crud from "../../service/crud";
import MenuTitle from "./MenuTitle";

const Menu = () => {
    const [menu, setMenu] = useState()

    useEffect(() => {
        crud.get("menus")
            .then(data => setMenu(data))
            .catch(err => console.error(err))
    }, [])

    return (
        <div>
            <Title title={"Menu"} titleColor={"color-rose"} titleBg={"bg-rose"}/>
            <a href={"menu/ajout"}>Ajouter un menu</a>
            {menu && menu.map(menu =>
                <a href={`menu/${menu && menu.id}`} key={menu.id}>
                    <MenuTitle menu={menu} key={menu.id}/>
                </a>
            )}
        </div>
    );
};

export default Menu;