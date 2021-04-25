import React from 'react';
import DetailsRecette from '../components/DetailsRecette';
import Footer from '../components/Footer';
import Logo from '../components/Logo';
import NavBar from '../components/NavBar';
import Navigation from '../components/Navigation';


const Recette = () => {
    return (
        <div className="Recette">
            

<Logo/>  
<NavBar/>
<Navigation/> 
<DetailsRecette/>      
<Footer/>
        </div>
    );
};

export default Recette;