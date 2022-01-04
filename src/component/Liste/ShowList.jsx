import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import crud from "../../service/crud";

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