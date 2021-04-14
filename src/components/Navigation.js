import React from 'react';
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div className='navigation'>
              <NavLink exact to="/" activeClassName="nav-active">Accueil</NavLink>
              <NavLink exact to="/recette" activeClassName="nav-active">Recette</NavLink>
              <NavLink exact to="/recette/favoris" activeClassName="nav-active">Favoris</NavLink>


           

        </div>
    );
};

export default Navigation;