import React, {useEffect, useState} from 'react';
import Title from "../Title/Title";
import crud from "../../service/crud";
import TitleList from "./TitleList";

const List = () => {
  const [list, setList] = useState([])

  useEffect(() => {
    crud.get("listes")
      .then(data => setList(data))
      .catch(err => console.error(err))
  }, [])

  return (
    <div>
      <Title title={"Liste"} titleBg={"bg-violet"} titleColor={"color-violet"}/>
      {list && list.map(l =>
        <li key={l.id}>
          <a href={`/liste/${l.id}`}>
            <TitleList list={l} />
          </a>
        </li>
      )}
    </div>
  );
};

export default List;