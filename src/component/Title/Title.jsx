import React from 'react';
import './title.scss'

const Title = ({title, titleColor, titleBg}) => {
    return (
        <div id={"title"} className={"mb-60"}>
            <h1 className={titleColor}>{title}</h1>
            <div className={titleBg}/>
        </div>
    );
};

export default Title;