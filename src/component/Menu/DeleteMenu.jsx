import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import crud from "../../service/crud";

const DeleteMenu = () => {
  const {id} = useParams()
  const navigate = useNavigate()

  function remove() {
    crud.delete("menus", id)
      .then(() => navigate("/menu"))
      .catch(err => console.error(err))
  }

  return (
    <button onClick={remove}>
      Supprimer
    </button>
  );
};

export default DeleteMenu;