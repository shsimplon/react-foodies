import React from 'react';
import DetailsRecette from '../components/DetailsRecette';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';


const Recette = () => {
    return (
        <div className="Recette">

<Logo/> 
<Navigation/> 
<DetailsRecette/>        
        </div>
    );
};

export default Recette;