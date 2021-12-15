import React, {useRef} from 'react';
import type from "../../service/type"

const AddType = ({newType}) => {
    const addType = useRef()

    function add(e) {
        e.preventDefault()

        const data = {
            name: addType.current.value
        }

        type.add(data)
            .then(data => {
                newType(data)
                addType.current.value = ""
            })
            .catch(err => console.log(err))
    }

    return (
        <form className="add-input br-20 mb-10">
            <input type="text" ref={addType}/>
            <span className="separator" />
            <button onClick={add}>Ajouter</button>
        </form>
    );
};

export default AddType;