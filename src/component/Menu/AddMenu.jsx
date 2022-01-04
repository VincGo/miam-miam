import React, {useState} from 'react';
import Title from "../Title/Title";
import crud from "../../service/crud";
import {useNavigate} from "react-router-dom";

const AddMenu = () => {
  const navigate = useNavigate()
  const [menu, setMenu] = useState()

  function add() {
    crud.add("menus", menu)
      .then((data) => navigate(`/menu/edit/${data.id}`))
      .catch(err => console.error(err))
  }

  function handleChangeDate(e) {
    setMenu({...menu, [e.target.name]: e.target.value})
  }

  return (
    <div>
      <Title title={"Nouveau menu"} titleBg={"bg-rose"} titleColor={"color-rose"}/>
      <label htmlFor="startDate" className={"color-rose"}>Début</label>
      <input type="date" name={"startDate"} id={"startDate"} onChange={handleChangeDate}/>
      <label htmlFor="endDate" className={"color-rose"}>Fin</label>
      <input type="date" name={"endDate"} id={"endDate"} onChange={handleChangeDate}/>
      <button onClick={add}>Créer un menu</button>
    </div>
  );
};

export default AddMenu;