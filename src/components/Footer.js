import React from "react";
import { NavLink } from "react-router-dom";
const Footer = () => (
  <div className="footer">
       <NavLink exact to="/" activeClassName="nav-active">Accueil</NavLink>
              <NavLink exact to="/recette" activeClassName="nav-active">Recette</NavLink>
              <NavLink exact to="/favoris" activeClassName="nav-active">Favoris</NavLink>
             

  </div>
);

export default Footer;