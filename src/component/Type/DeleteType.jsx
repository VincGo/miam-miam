import React from 'react';
import type from "../../service/type";

const DeleteType = ({typeId, typeData}) => {

    function remove() {
        type.delete(typeId)
            .then(typeData(typeId))
            .catch((err) => console.log(err))
    }

    return (
        <button onClick={remove}>
            X
        </button>
    );
};

export default DeleteType;