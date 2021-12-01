
import React from 'react';
import {Link} from "react-router-dom";
import './NavBar.scss'

const NavBar = () => {
    return (
        <nav>
            <ol>
                <Link to={"/"}>Miam-Miam</Link>
                <Link to={"/ingredient"}>Ingrédients</Link>
            </ol>
        </nav>
    );
};

export default NavBar;