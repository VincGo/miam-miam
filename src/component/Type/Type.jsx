import React, {useEffect, useState} from 'react';
import type from "../../service/type";
import AddType from "./AddType";
import EditType from "./EditType";
import Title from "../Title/Title";

const Type = () => {
    const [types, setTypes] = useState([])

    useEffect(() => {
        type.get()
            .then(data => setTypes(data))
            .catch(err => console.log(err))
    }, [])

    function newType(data) {
        setTypes(prevState => [...prevState, data])
    }

    function editType(data) {
        const updateType = types.map((i) => i.id === data.id ? data : i)
        setTypes(updateType)
    }

    function deleteType(id) {
        const newArr = types.filter((i) => i.id !== id)
        setTypes(newArr)
    }

    return (
        <div>
            <Title title={"Type"} titleBg={"bg-green"} titleColor={"color-green"}/>
            <div className={"form-container br-5 p-10"}>
                <AddType newType={newType}/>
                {types && types.map(t =>
                    <div key={t.id} className={"d-flex justify-space-between my-10"}>
                        <EditType editType={editType} typeData={t} removeType={deleteType}/>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Type;