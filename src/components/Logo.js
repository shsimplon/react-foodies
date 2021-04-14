import React from 'react';



const Logo = () => {
    return (
        <div className="logo">
      <img src="./images/logo.png" alt="cuisine"/>
    
<div className="Recherche-recette">
      <label for="site-search">Rechercher une recette: </label>
     <input type="search" id="site-search" name="q"
       aria-label="Search through site content"/>

     <button>Search</button>
     </div>


     </div>
    );
};

export default Logo;