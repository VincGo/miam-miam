
import React from 'react';
import {Link} from "react-router-dom";
import './NavBar.scss'

const NavBar = () => {
    return (
        <nav>
            <ol>
                <Link to={"/"} id={"logo"}>Miam-Miam</Link>
                <div id={"navbar-link"}>
                    <Link to={"/ingredient"}>Ingrédients</Link>
                    <Link to={"/type"}>Type</Link>
                </div>
            </ol>
        </nav>
    );
};

export default NavBar;