import React, {useEffect, useState} from 'react';
import Title from "../Title/Title";
import crud from "../../service/crud";

const Menu = () => {
    const [menu, setMenu] = useState()

    useEffect(() => {
        crud.get("menus")
            .then(data => setMenu(data))
            .catch(err => console.error(err))
    }, [])

    const event = new Date("2021-12-21T07:37:03+01:00")
    const dateFr = event.toLocaleDateString('fr')

    return (
        <div>
            <Title title={"Menu"} titleColor={"color-rose"} titleBg={"bg-rose"}/>
            <a href={"menu/ajout"}>Ajouter un menu</a>
            <p className={"color-rose"}>{dateFr}</p>
            {menu && menu.map(menu =>
                <div key={menu.id}>
                    <p>Du {menu.startDate} au {menu.endDate}</p>
                </div>
            )}
        </div>
    );
};

export default Menu;