import React from 'react';
import './title.scss'

const Title = ({title}) => {
    return (
        <div id={"title"}>
            <h1 >{title}</h1>
            <div />
        </div>
    );
};

export default Title;