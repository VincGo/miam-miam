import React from 'react';
import {Link} from "react-router-dom";
import './NavBar.scss'

const NavBar = () => {
  return (
    <nav>
      <ol>
        <Link to={"/"} id={"logo"}>Miam-Miam</Link>
        <div id={"navbar-link"}>
          <Link to={"/menu"}>Menu</Link>
          <Link to={"/ingredient"}>Ingrédients</Link>
          <Link to={"/type"}>Type</Link>
          <Link to={"/recette"}>Recette</Link>
        </div>
      </ol>
    </nav>
  );
};

export default NavBar;