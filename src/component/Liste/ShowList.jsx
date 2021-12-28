import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import crud from "../../service/crud";
import TitleList from "./TitleList";
import Title from "../Title/Title";

const ShowList = () => {
  const {id} = useParams()
  const [list, setList] = useState()

  useEffect(() => {
    crud.getSingle("listes", id)
      .then(data => setList(data))
      .catch(err => console.error(err))
  }, [id])

  return (
    <div>
        <div key={list?.id}>
          <Title title={ <TitleList listDate={list?.date}/> } titleColor={"color-violet"} titleBg={"bg-violet"}/>
          {list?.product.map((p, index) =>
            <li key={index}>
              {p.ingredient[0].name} ({p.quantity})
            </li>
          )}
        </div>
    </div>
  );
};

export default ShowList;