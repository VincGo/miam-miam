import React, {useCallback, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import crud from "../../service/crud";
import NewProduct from "./NewProduct";
import Title from "../Title/Title";
import EditListProduct from "./EditListProduct";


const ShowList = () => {
  const {id} = useParams()
  const [list, setList] = useState()
  const [crudList, setCrudList] = useState()
  const [update, setUpdate] = useState(false)


  //Récupère la list et la transforme pour ajouter, modifier, supprimer la liste
  const listForCrud = useCallback(() =>  {
    if(list) {
      const newArr = []
      for (const product of list && list.product) {
        newArr.push(product['@id'])
      }
      const obj = {
        menu: list.menu['@id'],
        product: newArr
      }
      setCrudList(obj)
    }
  }, [list])

  function addProduct(data) {
    console.log(data)
    setList({...list, product: [...list.product, data]})
    setUpdate(true)
  }

  function removeProduct(id) {
    const product = list.product.filter(i => i.id !== id)
    setList({...list, product: product})
    setUpdate(true)
  }

  function updateProduct(data) {
    const filter = list.product.map(i => i["@id"] === data["@id"] ? data : i)
    setList({...list, product: filter})
    setUpdate(true)
  }

  function updateList(id, data) {
    crud.edit("listes", id, data)
      .then(data => setList(data))
      .catch(err => console.error(err))
  }

  useEffect(() => {
    crud.getSingle("listes", id)
      .then(data => setList(data))
      .catch(err => console.error(err))
  }, [id])

  useEffect(() => {
    listForCrud()
  }, [listForCrud])

  useCallback(() => {
    console.log(list)
  }, [list])

  useEffect( () => {
    if (update) {
      updateList(id, crudList)
      setUpdate(false)
    }
  }, [crudList])

  return (
    <div>
      <Title title={"Liste"} titleBg={"bg-violet"} titleColor={"color-violet"}/>
      <div className="form-container br-5 p-10">
        <NewProduct addProduct={addProduct}/>
        {list?.product.map((p, index) =>
          <div key={index} className={"d-flex justify-space-between my-10"}>
            <EditListProduct product={p} removeId={removeProduct} updateProduct={updateProduct}/>
          </div>
        )}
      </div>

    </div>
  );
};

export default ShowList;