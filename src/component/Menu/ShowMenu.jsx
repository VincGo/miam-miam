import React, {useEffect, useState} from 'react';
import Title from "../Title/Title";
import {useParams} from "react-router-dom";
import crud from "../../service/crud";
import MenuTitle from "./MenuTitle";

const ShowMenu = () => {
    const {id} = useParams()
    const [menu, setMenu] = useState()

    useEffect(() => {
        crud.getSingle("menus", id)
            .then(data => setMenu(data))
            .catch(err => console.error(err))
    }, [id])

    return (
        <div>
            <Title title={<MenuTitle menu={menu}/>} titleBg={"bg-rose"} titleColor={"color-rose"}/>
            <table>
                <thead>
                    <tr>
                        <th />
                        <th>Midi</th>
                        <th>Soir</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Lundi</td>
                        <td>
                            <a href={`/recette/${menu?.mondayLunch?.id}`}>
                                {menu?.mondayLunch?.name}
                            </a>
                        </td>
                        <td>
                            <a href={`/recette/${menu?.mondayDinner?.id}`}>
                                {menu?.mondayDinner?.name }
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>Mardi</td>
                        <td>
                            <a href={`/recette/${menu?.tuesdayLunch?.id}`}>
                                {menu?.tuesdayLunch?.name }
                            </a>
                        </td>
                        <td>
                            <a href={`/recette/${menu?.tuesdayDinner?.id}`}>
                                {menu?.tuesdayDinner?.name }
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>Mercredi</td>
                        <td>
                            <a href={`/recette/${menu?.wednesdayLunch?.id}`}>
                                {menu?.wednesdayLunch?.name }
                            </a>
                        </td>
                        <td>
                            <a href={`/recette/${menu?.wednesdayDinner?.id}`}>
                                {menu?.wednesdayDinner?.name}
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>Jeudi</td>
                        <td>
                            <a href={`/recette/${menu?.thursdayLunch?.id}`}>
                                {menu?.thursdayLunch?.name }
                            </a>
                        </td>
                        <td>
                            <a href={`/recette/${menu?.thursdayDinner?.id}`}>
                                {menu?.thursdayDinner?.name }
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>Vendredi</td>
                        <td>
                            <a href={`/recette/${menu?.fridayLunch?.id}`}>
                                {menu?.fridayLunch?.name }
                            </a>
                        </td>
                        <td>
                            <a href={`/recette/${menu?.fridayDinner?.id}`}>
                                {menu?.fridayDinner?.name }
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>Samedi</td>
                        <td>
                            <a href={`/recette/${menu?.saturdayLunch?.id}`}>
                                {menu?.saturdayLunch?.name}
                            </a>
                        </td>
                        <td>
                            <a href={`/recette/${menu?.saturdayDinner?.id}`}>
                                {menu?.saturdayDinner?.name }
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>Dimanche</td>
                        <td>
                            <a href={`/recette/${menu?.sundayLunch?.id}`}>
                                {menu?.sundayLunch?.name}
                            </a>
                        </td>
                        <td>
                            <a href={`/recette/${menu?.sundayDinner?.id}`}>
                                {menu?.sundayDinner?.name}
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ShowMenu;