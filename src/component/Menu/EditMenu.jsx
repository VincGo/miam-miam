import React, {useEffect, useState} from 'react';
import Title from "../Title/Title";
import MenuTitle from "./MenuTitle";
import {useNavigate, useParams} from "react-router-dom";
import crud from "../../service/crud";
import FormMenu from "./FormMenu";

const EditMenu = () => {
  const {id} = useParams()
  const [menu, setMenu] = useState()
  const navigate = useNavigate()

  function edit(data) {
    crud.edit("menus", id, data)
      .then(() => navigate("/menu"))
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